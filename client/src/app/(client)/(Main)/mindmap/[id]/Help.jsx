import React from "react";

export default function Help({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div
        className="bg-white top-1/2  p-4 rounded z-50 w-auto h-auto"
        style={{ position: "absolute", left: "40%" }}
      >
        <h2 className="text-2xl font-semibold">Một số thông tin hữu ích</h2>
        <ol type="1" style={{ listStyleType: "decimal", marginLeft: "20px" }}>
          <li>Click đúp để có thể sửa tên node</li>
          <li>Click chuột nhấn del để xóa node</li>
          <li>Ctr+Click nhấn del để xóa nodes</li>
        </ol>
        <button className="text-xl font-semibold" onClick={onClose}>
          Đóng
        </button>
      </div>
      <div
        onClick={handleBackgroundClick}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
      ></div>
    </>
  );
}
