import styles from './styles.module.scss'
import { useDeliveryContext } from '../../../context/DeliveryContext'
import { Client, DeliveryRequest } from '../../../@types/api'
import { PersonalDataForm } from '../../../shared/PersonalDataForm/PersonalDataForm'
import { useState } from 'react'

export interface FormData{
    value: string | number | undefined,
    label: string,
    placeholder: string,
    onChange: (value: string, parametr: keyof DeliveryRequest, subParametr: keyof Client)=>void
}

export const PersonalDataPage=()=>{

    const {deliveryRequest, updateDeliveryRequest}=useDeliveryContext()
    debugger
    const updateNestedParam =(parametr: keyof DeliveryRequest | undefined, subParametr: keyof Client, value: string)=>{
        debugger
        if (deliveryRequest && parametr) {
            const updatedParam: Client = {
              ...deliveryRequest[parametr] as Client,
              [subParametr]: value,
            }
        
            const update: DeliveryRequest = {
              ...deliveryRequest,
              [parametr]: updatedParam,
            }
        }
    }
    
    const receiverForm: FormData[] = [
        {
            value: deliveryRequest?.receiver.lastname,
            label: 'Фамилия',
            placeholder: 'Фамилия',
            onChange: (value) => updateNestedParam('receiver', 'lastname', value)
        }
    ]

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