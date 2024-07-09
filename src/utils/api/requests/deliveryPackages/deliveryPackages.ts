import { DeliveryPackage } from "../../../../@types/api";
import { api } from "../../instanse";

export const getDeliveryPackages = async () => {
    const response = await api.get<DeliveryPackage>('/delivery/package/types')
    return response.data
}