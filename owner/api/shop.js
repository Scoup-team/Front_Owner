import client from "./client";

//가게 정보를 조회하는 API
export const getShopInfo = async () => {
  try {
    const res = await client.get(`admin/mypage/shop`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
