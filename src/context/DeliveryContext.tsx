import { createContext, ReactNode, useContext, useState } from "react";
import { DeliveryRequest, Package } from "../@types/api";

interface DeliveryContextProps{
    deliveryRequest: DeliveryRequest | undefined,
    updateDeliveryRequest: (updates: Partial<DeliveryRequest>)=>void

    deliveryPackage: Package | undefined,
    updateDeliveryPackage: (updates: Partial<Package>) => void,
    setDeliveryPackage: (newPackage: Package | undefined) => void
}

const DeliveryContext = createContext<DeliveryContextProps | undefined>(undefined)

export const useDeliveryContext = () =>{
    const context = useContext(DeliveryContext)

    if (context === undefined) {
        throw new Error("err");
    }

    return context
}

export const DeliveryContextProvider = (props: {children:ReactNode})=>{

    const [deliveryRequest, setDeliveryRequest]=useState<DeliveryRequest>()
    const [deliveryPackage, setDeliveryPackage] = useState<Package>();

    const updateDeliveryRequest = (updates: Partial<DeliveryRequest>) => {
        setDeliveryRequest((prev) => {
            if (prev === undefined) {
                return { ...updates } as DeliveryRequest;
            }
            return { ...prev, ...updates }
        })
    }

    const updateDeliveryPackage = (updates: Partial<Package>) => {
        setDeliveryPackage((prev) => {
            if (prev === undefined) {
                return { ...updates } as Package
            }
            return { ...prev, ...updates }
        })
    }

    const value={
        deliveryRequest,
        updateDeliveryRequest,

        deliveryPackage,
        updateDeliveryPackage,
        setDeliveryPackage
    }

    return <DeliveryContext.Provider value={value}>{props.children}</DeliveryContext.Provider>
}