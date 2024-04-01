/* eslint-disable react/display-name */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  MiniMap,
  Background,
  Controls,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

import "./index.css";
import CustomNode from "./CustomNode";

const initialNodes = [
  {
    id: "0",
    type: "custom",
    data: { label: "My Mindmap" },
    position: { x: 0, y: 50 },
    style: { backgroundColor: "rgb(60, 234, 60)" },
  },
];

let id = 1;
// const getId = () => `${id++}`;

// const nodeTypes = {
//   custom: CustomNode,
// };

export default function AddNodeOnEdgeDrop({
  idURL,
  onNodeData,
  title,
  description,
  dataNode,
  user,
}) {
  // console.log(idURL);
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();

  const [selectedNodes, setSelectedNodes] = useState(new Set());

  // const nodeTypes = useMemo(
  //   () => ({ custom: <CustomNode updateLabel={updateNodeLabel} /> }),
  //   []
  // );
  const updateNodeLabel = (nodeId, newLabel) => {
    console.log("newLabel: ", newLabel);
    setNodes((currentNodes) => {
      const copy = [...currentNodes];
      copy[copy.findIndex((obj) => obj.id === nodeId)].data.label = newLabel;
      return copy;
    });
  };

  const nodeTypes = useMemo(
    () => ({
      custom: (nodeProps) => (
        <CustomNode {...nodeProps} updateLabel={updateNodeLabel} />
      ),
    }),
    []
  );

  // Giả sử đây là hàm xử lý sự kiện cần gửi dữ liệu
  const sendDataToParent = () => {
    const nodeData = {
      mindMapId: idURL,
      name: title,
      description: description,
      email: user?.email,
      isPrivate: true,
      map: {
        nodes: nodes,
        edges: edges,
      },
      created_at: new Date().toLocaleString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
      }),
    };
    // console.log("Đây là sendDataToParent");
    onNodeData(nodeData);
  };

  // const onNodesChange = useCallback(
  //   (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes]
  // );

  const onNodeClick = useCallback((event, node) => {
    if (node.id === "0") return;

    if (event.ctrlKey || event.metaKey) {
      // Xử lý Ctrl + Click
      setSelectedNodes((prevSelected) => {
        const newSelected = new Set(prevSelected);
        if (newSelected.has(node.id)) {
          newSelected.delete(node.id);
        } else {
          newSelected.add(node.id);
        }
        return newSelected;
      });
    } else {
      // Xử lý click chuột bình thường
      setNodes((nds) =>
        nds.map((n) => {
          return n.id === node.id
            ? {
                ...n,
                style: {
                  ...n.style,
                  backgroundColor:
                    n.style && n.style.backgroundColor === "#ffff19"
                      ? "rgb(60, 234, 60)"
                      : "#ffff19",
                },
              }
            : {
                ...n,
                style: {
                  ...n.style,
                  backgroundColor: "rgb(60, 234, 60)",
                },
              };
        })
      );
      setSelectedNodes(new Set([...selectedNodes, node.id]));
    }
  }, []);

  // Cập nhật màu sắc của các node dựa trên danh sách node đã chọn
  useEffect(() => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        style: {
          ...n.style,
          // Đặt màu sắc cho node nếu nó nằm trong danh sách đã chọn
          backgroundColor: selectedNodes.has(n.id)
            ? "#ffff19"
            : n.style
            ? n.style.backgroundColor
            : "rgb(60, 234, 60)",
        },
      }))
    );
  }, [selectedNodes, setNodes]);

  // Hàm xử lý khi click ra ngoài
  const onOutsideClick = useCallback((event) => {
    // Kiểm tra xem click có xảy ra trên một node hay không
    if (!event.target.closest(".react-flow__node")) {
      setNodes((nds) =>
        nds.map((n) => ({
          ...n,
          style: {
            ...n.style,
            backgroundColor: "rgb(60, 234, 60)", // Đặt lại màu nền
          },
        }))
      );
    }
  }, []);

  // Đăng ký và hủy đăng ký event listener
  useEffect(() => {
    document.addEventListener("mousedown", onOutsideClick);

    return () => {
      document.removeEventListener("mousedown", onOutsideClick);
    };
  }, [onOutsideClick]);

  // Hàm xử lý khi nhấn phím Del
  const handleKeyDown = useCallback(
    (event) => {
      console.log(event.key);
      if (event.key === "Delete" || event.key === "Del") {
        setNodes((currentNodes) =>
          currentNodes.filter((n) => {
            return !selectedNodes.has(n.id);
          })
        );

        setEdges((currentEdges) =>
          currentEdges.filter(
            (e) => !selectedNodes.has(e.source) && !selectedNodes.has(e.target)
          )
        );

        setSelectedNodes(new Set());
      }
    },
    [selectedNodes, setNodes, setEdges]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const onConnect = useCallback((params) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const getId = () => `${dataNode.nodes.length++}`;

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        const id = getId();
        console.log(id);
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
          type: "custom",
        };

        setNodes((nds) => {
          console.log("nds", nds);
          return nds.concat(newNode);
        });
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id })
        );

        // sendDataToParent();
      }
    },
    [screenToFlowPosition]
  );

  useEffect(() => {
    sendDataToParent();
  }, [edges, title, description]);

  useEffect(() => {
    if (dataNode && dataNode.nodes && dataNode.edges) {
      setNodes(dataNode.nodes);
      setEdges(dataNode.edges);
    }
  }, [dataNode]);

  return (
    <div
      className="wrapper"
      style={{ width: "100%", height: "600px" }}
      ref={reactFlowWrapper}
    >
      <ReactFlow
        nodes={nodes}
        // nodeTypes={{
        //   custom: (nodeProps) => (
        //     <CustomNode {...nodeProps} updateLabel={updateNodeLabel} />
        //   ),
        // }}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
        nodeTypes={nodeTypes}
        deleteKeyCode={-1}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={15} size={1} />
      </ReactFlow>
    </div>
  );
}

// export default () => (
//   <ReactFlowProvider>
//     <AddNodeOnEdgeDrop />
//   </ReactFlowProvider>
// );
