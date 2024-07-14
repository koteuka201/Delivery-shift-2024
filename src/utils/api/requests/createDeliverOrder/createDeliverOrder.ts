import { CreateDeliveryOrderResponse, DeliveryRequest } from "../../../../@types/api";
import { api } from "../../instanse";

export const postCreateOrderQuery= async (data:DeliveryRequest)=>{
    const response = await api.post<CreateDeliveryOrderResponse>('delivery/order', data)
    return response.data
}