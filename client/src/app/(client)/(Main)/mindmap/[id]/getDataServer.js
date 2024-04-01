export const dataServer = async (idURL) => {
  try {
    const response = await fetch(
      `https://cmmapi.baoanhh.id.vn/mindmap?mindMapId=${idURL}`
    );
    if (response.ok) {
      const data = await response.json();
      //   console.log(data);
      return data;
    }
  } catch (error) {
    console.error("Error while fetching data:", error);
  }
};

export const dataServerApi = async (dataAPI) => {
  try {
    const response = await fetch(
      `https://cmmapi.baoanhh.id.vn/mindmap/${dataAPI[0].id}`
    );
    if (response.ok) {
      const data = await response.json();
      //   console.log(data);
      return data;
    }
  } catch (error) {
    console.error("Error while fetching data:", error);
  }
};

export const getData = async (user) => {
  try {
    const response = await fetch("https://cmmapi.baoanhh.id.vn/mindmap");
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
  }
};
