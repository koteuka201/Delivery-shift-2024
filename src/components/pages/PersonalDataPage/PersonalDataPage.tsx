import styles from './styles.module.scss'
import { useDeliveryContext } from '../../../context/DeliveryContext'
import { Address, Client} from '../../../@types/api'
import { PersonalDataForm } from '../../../shared/PersonalDataForm/PersonalDataForm'
import { createAddressFormData, createClientFormData } from './createFormData/createFormData'
import { useEffect, useState } from 'react'
import { createInitialAddress, createInitialClient } from './createInitialData/createInitialData'
import { useNavigate } from 'react-router-dom'
import { PayerForm } from './payerForm/payerForm'
import { ConfirmOrderForm } from './confirmOrderForm/ConfirmOrderForm'

export interface FormData{
    value?: string | number | undefined,
    label: string,
    placeholder?: string,
    onChange: (value: string)=>void
}


export const PersonalDataPage=()=>{

    const navigate=useNavigate()

    const {formStates, updateFormState, updateDeliveryRequest}=useDeliveryContext()

    const [receiver,setReceiver]=useState<Client>(createInitialClient())
    const [sender,setSender]=useState<Client>(createInitialClient())
    const [addressFrom,setAddressFrom]=useState<Address>(createInitialAddress())
    const [addressTo,setAddressTo]=useState<Address>(createInitialAddress())

    const receiverForm = createClientFormData(receiver, setReceiver)
    const senderForm = createClientFormData(sender, setSender)
    const addressFromForm=createAddressFormData(addressFrom,setAddressFrom)
    const addressToForm=createAddressFormData(addressTo,setAddressTo)
        
    useEffect(()=>{
        updateFormState({
            receiverForm: true,
            senderForm: false, 
            addressFromForm: false, 
            addressToForm: false,
            payerForm: false,
            confirmOrder:false
        })
    },[])

    return(
        <div className={styles.container}>
            <div className={styles.formContainer}>
                {formStates.receiverForm &&
                    <PersonalDataForm 
                        label={'Получатель'}
                        formData={receiverForm}
                        onClickContinue={()=>updateFormState({receiverForm: false, senderForm: true})}
                        onClickBack={()=>{
                            navigate(-1); 
                            updateFormState({receiverForm: false})
                        }}
                    />
                }
                {formStates.senderForm &&
                    <PersonalDataForm 
                        label={'Отправитель'}
                        formData={senderForm}
                        onClickContinue={()=>updateFormState({senderForm: false, addressFromForm: true})}
                        onClickBack={()=>updateFormState({receiverForm: true, senderForm: false})}
                    />
                }
                {formStates.addressFromForm &&
                    <PersonalDataForm 
                        label={'Откуда забрать'}
                        formData={addressFromForm}
                        onClickContinue={()=>updateFormState({addressFromForm: false, addressToForm: true})}
                        onClickBack={()=>updateFormState({senderForm: true, addressFromForm: false})}
                    />
                }
                {formStates.addressToForm &&
                    <PersonalDataForm 
                        label={'Куда доставить'}
                        formData={addressToForm}
                        onClickContinue={()=>updateFormState({addressToForm: false, payerForm: true})}
                        onClickBack={()=>updateFormState({addressFromForm: true, addressToForm: false})}
                    />
                }
                {formStates.payerForm &&
                    <PayerForm 
                        onClickContinue={()=>{
                            updateDeliveryRequest({
                                sender: sender, 
                                receiver:receiver,
                                senderAddress:addressFrom, 
                                receiverAddress: addressFrom
                            })
                            updateFormState({confirmOrder: true, payerForm: false})
                        }}
                        onClickBack={()=>updateFormState({addressToForm: true, payerForm: false})}
                    />
                }
                {formStates.confirmOrder &&
                    <ConfirmOrderForm/>
                }
            </div>
        </div>
    )
}