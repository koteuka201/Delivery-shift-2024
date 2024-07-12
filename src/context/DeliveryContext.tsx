import { createContext, ReactNode, useContext, useState } from "react";
import { DeliveryRequest, Package } from "../@types/api";

interface FormStates{
    receiverForm: boolean,
    senderForm: boolean,
    addressFromForm: boolean,
    addressToForm: boolean,
    payerForm: boolean,
    confirmOrder: boolean
}

interface DeliveryContextProps{
    deliveryRequest: DeliveryRequest | undefined,
    updateDeliveryRequest: (updates: Partial<DeliveryRequest>)=>void
    setDeliveryRequest: (newRequest: DeliveryRequest | undefined)=>void

    deliveryPackage: Package | undefined,
    updateDeliveryPackage: (updates: Partial<Package>) => void,
    setDeliveryPackage: (newPackage: Package | undefined) => void

    formStates: FormStates,
    updateFormState: (updates: Partial<FormStates>) => void
}

const DeliveryContext = createContext<DeliveryContextProps | undefined>(undefined)

export const useDeliveryContext = () =>{
    const context = useContext(DeliveryContext)

    if (!context) {
        throw new Error("err");
    }

    return context
}

export const DeliveryContextProvider = (props: {children:ReactNode})=>{

    const [deliveryRequest, setDeliveryRequest]=useState<DeliveryRequest>()
    const [deliveryPackage, setDeliveryPackage] = useState<Package>();
    const [formStates, setFormStates]=useState<FormStates>({
        receiverForm: false,
        senderForm: false,
        addressFromForm: false,
        addressToForm: false,
        payerForm:false,
        confirmOrder: false
    })

    const updateDeliveryRequest = (updates: Partial<DeliveryRequest>) => {
        setDeliveryRequest((prev) => {
            if (prev === undefined) {
                return { ...updates } as DeliveryRequest;
            }
            return { ...prev, ...updates }
        })
    }

    const updateFormState=(update: Partial<FormStates>)=>{
        setFormStates((prev)=>{
            return {...prev, ...update}
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
        setDeliveryRequest,

        deliveryPackage,
        updateDeliveryPackage,
        setDeliveryPackage,

        formStates,
        updateFormState
    }

    return <DeliveryContext.Provider value={value}>{props.children}</DeliveryContext.Provider>
}