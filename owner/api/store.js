import client from "./client";

// 가게 등록 api
export const registerStore = async (shopName,phoneNumber, licenseeNumber, shopAddress, runningTime, shopImageUrl) => {
    try{
        const response = await client.post("/admin/mypage/shop", {
            shopName: shopName,
            phoneNumber: phoneNumber,
            licenseeNumber: licenseeNumber,
            shopAddress: shopAddress,
            runningTime: runningTime,
            shopImageUrl: shopImageUrl
        })

        console.log("response: ", response.data);
        return response.data
    } catch(error){
        console.log("error", error);
    }
    
}

// 가게 삭제 api
export const deleteStore = async () => {
    try{
        const response = await client.delete(`/admin/mypage/shop`)
        // console.log("deleteStore: ", response.data);
        return response.data
    } catch(error){
        console.log("deleteStore_error", error);
    }
    
}

// 가게 조회 api
export const showStore = async () => {
    try{
        const response = await client.get("/admin/mypage/shop")
        console.log("showStore: ", response.data);
        return response.data
    } catch(error){
        console.log("showStore_error", error);
    }
}

// 가게 수정 api
export const patchStore = async (shopName,phoneNumber, licenseeNumber, shopAddress, runningTime, shopImageUrl) => {
    try{
        const response = await client.patch("/admin/mypage/shop",{
            name: shopName,
            phoneNumber: phoneNumber,
            licenseeNumber: licenseeNumber,
            location: shopAddress,
            runningTime: runningTime,
            imageUrl: shopImageUrl
        })
        console.log("showStore: ", response.data);
        return response.data
    } catch(error){
        console.log("showStore_error", error);
    }
}
