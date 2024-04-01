"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import showToast from "../../helpers/Toastify";
import Loading from "../../Loading/Loading";
import { useRouter } from "next/navigation";

export default function DataTable({ data, user }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // const [dataApi, setDataApi] = useState([]);
  // console.log(data);
  // useEffect(() => {
  //   setDataApi(data.filter((item) => item.email === user.email));
  // }, [data]);

  // console.log(dataFilter);

  // const data = await getData(user);
  // console.log(data);
  // setDataApi(data.filter((item) => item.email === user.email));
  // getData();

  useEffect(() => {
    // console.log(router.asPath);
    router.refresh();
  }, [router.asPath]);

  const handleDelete = (id) => {
    const confirmDelete = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://cmmapi.baoanhh.id.vn/mindmap/${id}`,
          {
            method: "DELETE",
          }
        );
        console.log("responseJson: ", await response.json());
        showToast("success", "Xóa thành công");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        router.refresh();
      }
    };

    // Hiển thị thông báo xác nhận xóa
    showToast("confirm", "Bạn có chắc chắn muốn xóa không?", confirmDelete);
  };

  return (
    <div>
      {isLoading && <Loading />}
      <div
        className="relative m-auto overflow-x-auto mt-4 shadow-md sm:rounded-lg"
        style={{ width: "90%" }}
      >
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Tên
              </th>
              <th scope="col" className="px-6 py-3">
                Tạo lúc
              </th>

              <th scope="col" className="px-6 py-3">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              ?.filter((item) => item?.email === user?.email)
              .map((el) => (
                <tr
                  key={el.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium flex-wrap text-gray-900 whitespace-nowrap dark:text-white"
                    style={{ maxWidth: "500px" }}
                  >
                    <Link href={`/mindmap/${el.mindMapId}`}>{el.name}</Link>
                    <p className="opacity-80">{el.description}</p>
                  </th>
                  <td className="px-6 align-top py-4">{el.created_at}</td>

                  <td className="flex items-center px-6 py-4">
                    <Link
                      href={`/mindmap/${el.mindMapId}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Sửa
                    </Link>
                    <button
                      onClick={() => handleDelete(el.id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
