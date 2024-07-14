import { useMutation } from "@tanstack/react-query";
import { postCalculateDeliveryQuery } from './../utils/api/requests/calculateDelivery/calculateDelivery';
import { CalculateDelivery } from "../@types/api";

export const usePostCalculateDeliveryQuery = () => {
    return useMutation({
        mutationFn: (data: CalculateDelivery) => postCalculateDeliveryQuery(data),
    })
}