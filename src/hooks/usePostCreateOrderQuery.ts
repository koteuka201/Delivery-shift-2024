import { useMutation } from "@tanstack/react-query";
import { DeliveryRequest } from "../@types/api";
import { postCreateOrderQuery } from "../utils/api/requests/createDeliverOrder/createDeliverOrder";

export const usePostCreateOrderQuery = () => {
    return useMutation({
        mutationFn: (data: DeliveryRequest) => postCreateOrderQuery(data),
    })
}