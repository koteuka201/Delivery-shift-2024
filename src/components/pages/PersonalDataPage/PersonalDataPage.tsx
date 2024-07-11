import styles from './styles.module.scss'
import { useDeliveryContext } from '../../../context/DeliveryContext'
import { Address, Client, DeliveryRequest } from '../../../@types/api'
import { PersonalDataForm } from '../../../shared/PersonalDataForm/PersonalDataForm'
import { createAddressFormData, createClientFormData } from './createFormData/createFormData'
import { useEffect, useState } from 'react'
import { createInitialAddress, createInitialClient } from './createInitialData/createInitialData'

export interface FormData{
    value?: string | number | undefined,
    label: string,
    placeholder: string,
    onChange: (value: string)=>void
}

export const PersonalDataPage=()=>{

    // const {deliveryRequest, updateDeliveryRequest}=useDeliveryContext()
    

    const [receiver,setReceiver]=useState<Client>(createInitialClient())
    const [sender,setSender]=useState<Client>(createInitialClient())
    const [addressFrom,setAddressFrom]=useState<Address>(createInitialAddress())
    const [addressTo,setAddressTo]=useState<Address>(createInitialAddress())

    const receiverForm = createClientFormData(receiver, setReceiver)
    const senderForm = createClientFormData(sender, setSender)
    const addressFromFrom=createAddressFormData(addressFrom,setAddressFrom)
    const addressToFrom=createAddressFormData(addressTo,setAddressTo)
    console.log(receiverForm);
    
    return(
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <PersonalDataForm 
                    label={'Получатель'}
                    formData={receiverForm}
                />
            </div>
        </div>
    )
}