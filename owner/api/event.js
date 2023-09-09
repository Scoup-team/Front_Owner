import client from "./client";

//이벤트를 조회하는 API
export const getEvent = async (cafeId) => {
  try {
    const config = {
      headers: {
        cafeId: cafeId,
      },
    };
    const res = await client.get(`admin/mypage/event`, config);
    return res.data;
  } catch (err) {
    throw err;
  }
};

//이벤트를 추가하는 API
export const addEvent = async (cafeId, content) => {
  try {
    const config = {
      headers: {
        cafeId: cafeId,
      },
    };
    const res = await client.post(`admin/mypage/event`, content, config);
    return res.data;
  } catch (err) {
    throw err;
  }
};

//이벤트를 삭제하는 API
export const deleteEvent = async (eventId) => {
  try {
    const res = await client.delete(`admin/mypage/event/${eventId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

//이벤트를 수정하는 API
export const patchEvent = async (eventId, content) => {
  try {
    const res = await client.patch(`admin/mypage/event/${eventId}`, content);
    return res.data;
  } catch (err) {
    throw err;
  }
};
