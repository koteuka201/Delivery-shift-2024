import { useQuery } from "@tanstack/react-query";
import { getDeliveryPoints } from "../utils/api/requests/deliveryPoints/deliveryPoints";

export const useGetDeliveryPointsQuery = () => {
    return useQuery({
        queryFn: getDeliveryPoints,
        queryKey: ['deliveryPoints'],
        select: (data) => data
    })
}