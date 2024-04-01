"use client";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function ButtonAdd({ user }) {
  const router = useRouter();
  // console.log(user);
  const handleAddNew = async () => {
    const newId = await uuidv4();

    // onDataFromChild({ id: newId, time: new Date().toISOString() });
    const dataDefault = {
      mindMapId: newId,
      name: "MindMap không có tên",
      description: "Chưa có mô tả",
      email: user.email,
      isPrivate: true,
      map: {
        nodes: [
          {
            id: "0",
            type: "custom",
            data: { label: "My Mindmap" },
            position: { x: 0, y: 50 },
            style: { backgroundColor: "rgb(60, 234, 60)" },
          },
        ],
      },
      created_at: new Date().toLocaleString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
      }),
    };
    const response = await fetch("https://mindmap.ndng.net/mindmap", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataDefault),
    });
    console.log("responseJson: ", await response.json());
    router.push(`/mindmap/${newId}`);
  };
  return (
    <>
      <button
        onClick={handleAddNew}
        className="bg-blue-500 border-blue-500 text-white hover:bg-blue-700 hover:transition-colors border-2 mt-3 p-2 rounded-lg  "
      >
        Thêm mới
      </button>
    </>
  );
}
