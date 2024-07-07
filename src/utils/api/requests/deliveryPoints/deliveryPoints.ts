import { DeliveryPoints } from "../../../../@types/api";
import { api } from "../../instanse";

export const getDeliveryPoints = async () => {
    const response = await api.get<DeliveryPoints>('/delivery/points')
    return response.data
}