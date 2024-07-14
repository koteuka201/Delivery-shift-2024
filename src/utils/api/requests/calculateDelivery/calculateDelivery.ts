import { CalculateDelivery, CalculateDeliveryResponse } from "../../../../@types/api";
import { api } from "../../instanse";

export const postCalculateDeliveryQuery = async (data: CalculateDelivery) => {
    const response = await api.post<CalculateDeliveryResponse>('/delivery/calc', data)
    return response.data
}