"use client";

import { useEffect, useState } from "react";
// import App from "./App";
import Head from "next/head";
import { ReactFlowProvider } from "reactflow";
import AddNodeOnEdgeDrop from "./App";
import Loading from "@/app/(client)/Loading/Loading";
import showToast from "@/app/(client)/helpers/Toastify";
import Help from "./Help";
import { mutate } from "swr";
import Share from "./Share";
import NotFound from "@/app/(client)/NotFound";
// import Image from "next/image";
// import imgNotFound from "@/app/assets/image/404notfound.jpg";

export default function MindMapNode({
  idURL,
  isUserOther,
  user,
  dataApiServer,
  isMe,
}) {
  const [title, setTitle] = useState(dataApiServer?.name);
  const [description, setDescription] = useState(dataApiServer?.description);
  const [saveNode, setSaveNode] = useState(dataApiServer);
  const [isLoading, setIsLoading] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  // const [checkPrivate, setCheckPrivate] = useState(dataApiServer?.isPrivate);
  // const [isMe, setIsMe] = useState(false);
  // const [data, setData] = useState([]);

  // console.log(idURL);

  const [nodesData, setNodesData] = useState([]);

  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  const handleInputChange = (event) => {
    // document.title = event.target.value;
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const handleInputDescription = (event) => {
    // document.title = event.target.value;
    console.log(event.target.value);
    setDescription(event.target.value);
  };

  const handleHelpClick = () => {
    setIsHelpOpen(true);
  };

  const handleShareClick = () => {
    setIsShareOpen(true);
  };

  const handleCloseHelp = () => {
    setIsHelpOpen(false);
  };

  const handleCloseShare = () => {
    setIsShareOpen(false);
  };

  const handleSaveNode = (nodeData) => {
    setSaveNode(nodeData);
  };

  const handleNodeData = async () => {
    // console.log(saveNode);
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://cmmapi.baoanhh.id.vn/mindmap/${dataApiServer.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveNode),
        }
      );
      console.log("responseJson: ", await response.json());
      if (response.ok) {
        mutate(`https://cmmapi.baoanhh.id.vn/mindmap/${dataApiServer.id}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      showToast("success", "Lưu thành công");
    }
  };

  return (
    <div>
      {isLoading && <Loading />}
      {title ? (
        <div>
          <>
            <Head>
              <title>{title}</title>
              <meta property="og:title" content={dataApiServer?.name} />
              <meta
                property="og:description"
                content={dataApiServer?.description}
              />
              <meta
                property="og:image"
                content="https://mindmap-steel.vercel.app/_next/static/media/so-do-tu-duy.95dad645.95dad645.jpg"
              />
            </Head>
            <div className="flex justify-between">
              <div className="w-1/2">
                <input
                  type="text"
                  value={title}
                  onChange={handleInputChange}
                  className="text-3xl font-semibold w-full"
                />
                <input
                  type="text"
                  value={description}
                  onChange={handleInputDescription}
                  className="w-full mt-3 text-xl"
                />
              </div>

              {!isUserOther && (
                <div className="flex gap-6">
                  <div>
                    <button
                      onClick={handleNodeData}
                      className="bg-green-600 p-1.5 hover:bg-green-700 hover:transition-colors text-white rounded-md "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 inline-block "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                        />
                      </svg>
                      <span>Lưu thay đổi</span>
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={handleShareClick}
                      className="bg-blue-600 hover:bg-blue-700 hover:transition-colors p-1.5 text-white rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 inline-block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                        />
                      </svg>
                      Chia sẻ
                    </button>
                  </div>
                  <div>
                    <button onClick={handleHelpClick}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 mr-2  fill-blue-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                        />
                      </svg>
                    </button>
                  </div>
                  {isHelpOpen && (
                    <Help isOpen={isHelpOpen} onClose={handleCloseHelp} />
                  )}
                  {isShareOpen && (
                    <Share
                      idURL={idURL}
                      isOpen={isShareOpen}
                      onClose={handleCloseShare}
                      title={title}
                      description={description}
                      data={dataApiServer}
                    />
                  )}
                </div>
              )}
            </div>
          </>
          <ReactFlowProvider>
            <AddNodeOnEdgeDrop
              idURL={idURL}
              title={title}
              onNodeData={handleSaveNode}
              description={description}
              // dataNode={data[0]?.map}
              // initialNodeData={saveNode}
              dataNode={dataApiServer?.map}
              user={user}
            />
          </ReactFlowProvider>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
