import { useQuery } from "@tanstack/react-query";
import { getDeliveryPackages } from "../utils/api/requests/deliveryPackages/deliveryPackages";

export const useGetDeliveryPackagesQuery = () => {
    return useQuery({
        queryFn: getDeliveryPackages,
        queryKey: ['deliveryPackages'],
        select: (data) => data
    })
}