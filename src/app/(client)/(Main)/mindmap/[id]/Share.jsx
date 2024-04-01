import showToast from "@/app/(client)/helpers/Toastify";
import React, { useState } from "react";
import imgShare from "../../../../../../public/so-do-tu-duy.95dad645.jpg";

export default function Share({
  title,
  description,
  idURL,
  isOpen,
  onClose,
  data,
}) {
  const [isPrivateChecked, setIsPrivateChecked] = useState(data.isPrivate);
  const [titleShare, setTitleShare] = useState(data.name);
  const [descriptionShare, setDescriptionShare] = useState(data.description);
  // const [linkImageShare, setLinkImageShare] = useState(data.ImageShare);

  if (!isOpen) return null;

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  console.log("imgShare: ", imgShare);

  const handlePrivacyChange = (isPrivate) => {
    setIsPrivateChecked(isPrivate);
  };

  console.log(data);

  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://mindmap.ndng.net/mindmap/${data.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: titleShare,
            description: descriptionShare,
            isPrivate: isPrivateChecked,
          }),
        }
      );
      showToast("success", "Lưu thành công");
    } catch (err) {
      showToast("error", "Lưu thất bại");
      console.log("handleSave", err);
    }
  };

  return (
    <>
      <div
        className="bg-white  p-4 rounded z-50 h-auto"
        style={{
          position: "absolute",
          left: "35%",
          top: "20%",
          minWidth: "520px",
          maxWidth: "520px",
        }}
      >
        <div className="flex items-center justify-center gap-5">
          <div>
            <input
              type="radio"
              id="private"
              checked={isPrivateChecked}
              className="cursor-pointer"
              onChange={() => handlePrivacyChange(true)}
            />
            <label className="cursor-pointer" htmlFor="private">
              Riêng tư
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="public"
              checked={!isPrivateChecked}
              className="cursor-pointer"
              onChange={() => handlePrivacyChange(false)}
            />
            <label className="cursor-pointer" htmlFor="public">
              Công khai
            </label>
          </div>
        </div>

        {isPrivateChecked ? (
          <div className="mt-3">
            <p className="text-xl">
              Nếu chọn riêng tư, chỉ có bạn mới được quyền xem Mindmap này
            </p>
          </div>
        ) : (
          <div className="w-full">
            <div>
              <p>Liên kết chia sẻ</p>
              <input
                className="  w-full p-2 rounded-md mb-3 bg-slate-200 bg-opacity-80 text-black "
                type="text"
                defaultValue={`https://mindmap-steel.vercel.app/mindmap/${idURL}`}
                onClick={(e) => e.target.select()}
                readOnly
              />
            </div>
            <div>
              <p>Tiêu đề</p>
              <input
                className=" w-full p-2 rounded-md mb-3 bg-slate-200 bg-opacity-80 text-black "
                type="text"
                defaultValue={title}
                onChange={(e) => setTitleShare(e.target.value)}
              />
            </div>
            <div>
              <p>Mô tả</p>
              <textarea
                className=" w-full p-2 rounded-md resize-none mb-3 bg-slate-200 bg-opacity-80 text-black "
                cols="30"
                rows="5"
                defaultValue={description}
                onChange={(e) => setDescriptionShare(e.target.value)}
              ></textarea>
            </div>
            <div>
              <p>Ảnh chia sẻ</p>
              <input
                className=" w-full p-2 rounded-md mb-3 bg-slate-200 bg-opacity-80 text-black "
                type="text"
                defaultValue={
                  "https://mindmap-steel.vercel.app/_next/static/media/so-do-tu-duy.95dad645.95dad645.jpg"
                }
                onClick={(e) => e.target.select()}
                // onChange={(e) => setLinkImageShare(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-center gap-5">
          <button
            className=" bg-slate-500 hover:bg-slate-600 text-white p-2 rounded-md text-xl font-semibold"
            onClick={onClose}
          >
            Đóng
          </button>
          <button
            onClick={() => handleSave()}
            className=" bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md text-xl font-semibold"
          >
            Lưu lại
          </button>
        </div>
      </div>
      <div
        onClick={handleBackgroundClick}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
      ></div>
    </>
  );
}
