import { createContext, ReactNode, useContext, useState } from "react";
import { DeliveryRequest } from "../@types/api";

interface DeliveryContextProps{
    deliveryRequest: DeliveryRequest | undefined,
    updateDeliveryRequest: (updates: Partial<DeliveryRequest>)=>void
}

const DeliveryContext = createContext<DeliveryContextProps | undefined>(undefined)

export const useDeliveryContext = () =>{
    const context = useContext(DeliveryContext)
    return context
}

export const DeliveryContextProvider = (props: {children:ReactNode})=>{

    const [deliveryRequest, setDeliveryRequest]=useState<DeliveryRequest>()

    const updateDeliveryRequest = (updates: Partial<DeliveryRequest>) => {
        setDeliveryRequest((prev) => {
            if (prev === undefined) {
                return { ...updates } as DeliveryRequest;
            }
            return { ...prev, ...updates }
        })
    };

    const value={
        deliveryRequest,
        updateDeliveryRequest
    }

    return <DeliveryContext.Provider value={value}>{props.children}</DeliveryContext.Provider>
}