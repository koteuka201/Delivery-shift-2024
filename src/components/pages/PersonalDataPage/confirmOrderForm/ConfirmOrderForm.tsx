import { useState } from 'react'
import { useDeliveryContext } from '../../../../context/DeliveryContext'
import { usePostCreateOrderQuery } from '../../../../hooks/usePostCreateOrderQuery'
import { Button } from '../../../../shared/Button/Button'
import { Typography } from '../../../../shared/Typography/Typography'
import { getDayText } from '../../../../utils/helpers/getDayText'
import { ConfirmInfoCard } from './ConfirmInfoCard/ConfirmInfoCard'
import styles from './styles.module.scss'

const deliveryOptions=(value: 'EXPRESS'| 'DEFAULT'|undefined)=>{
    if(!value) return 0

    return value==='DEFAULT' ? 'Обычная доставка' : 'Экспресс доставка до двери'
}

export const ConfirmOrderForm=()=>{
    
    const {deliveryRequest, updateDeliveryRequest, updateFormState}=useDeliveryContext()
    const {mutate: createOrder}=usePostCreateOrderQuery()
    const [isModalOpen, setIsModalOpen]=useState(false)

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(deliveryRequest){
            createOrder(deliveryRequest)
            setIsModalOpen(true)
        }
    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <Typography variant='h2'>
                Проверка данных заказа
            </Typography>
            <ConfirmInfoCard
                parametrName={'Получатель'}
                subParametrValue1={`
                    ${deliveryRequest?.receiver.lastname}
                    ${deliveryRequest?.receiver.firstname} 
                    ${deliveryRequest?.receiver.middlename}
                `}
                subParametrName1={'ФИО'}
                subParametrName2={'Телефон'}
                subParametrValue2={deliveryRequest?.receiver.phone}
                onClick={()=>updateFormState({confirmOrder: false, receiverForm: true})}
            />
            <ConfirmInfoCard
                parametrName={'Отправитель'}
                subParametrValue1={`
                    ${deliveryRequest?.sender.lastname}
                    ${deliveryRequest?.sender.firstname} 
                    ${deliveryRequest?.sender.middlename}
                `}
                subParametrName1={'ФИО'}
                subParametrName2={'Телефон'}
                subParametrValue2={deliveryRequest?.sender.phone}
                onClick={()=>updateFormState({confirmOrder: false, senderForm: true})}
            />
            <ConfirmInfoCard
                parametrName={'Откуда забрать'}
                subParametrValue1={`
                    ул. ${deliveryRequest?.senderAddress.street},
                     д. ${deliveryRequest?.senderAddress.house}, 
                     кв. ${deliveryRequest?.senderAddress.apartment}
                `}
                subParametrName1={'Адрес'}
                subParametrName2={'Заметка'}
                subParametrValue2={deliveryRequest?.senderAddress.comment}
                onClick={()=>updateFormState({confirmOrder: false, addressFromForm: true})}
            />
            <ConfirmInfoCard
                parametrName={'Куда доставить'}
                subParametrValue1={`
                    ул. ${deliveryRequest?.receiverAddress.street},
                     д. ${deliveryRequest?.receiverAddress.house}, 
                     кв. ${deliveryRequest?.receiverAddress.apartment}
                `}
                subParametrName1={'Адрес'}
                subParametrName2={'Заметка'}
                subParametrValue2={deliveryRequest?.receiverAddress.comment}
                onClick={()=>updateFormState({confirmOrder: false, addressToForm: true})}
            />
            <div className={styles.bottomSection}>
                <div className={styles.bottomItemUpper}>
                    <Typography variant='h3'>
                        Итого:
                    </Typography>
                    <Typography variant='h3'>
                        {deliveryRequest?.option.price}₽
                    </Typography>
                </div>
                <div className={styles.bottomItemLower}>
                    
                    <Typography variant='p_16_regular'>
                        Тариф: {deliveryOptions(deliveryRequest?.option?.type)}
                    </Typography>
                    <Typography variant='p_16_regular'>
                        Срок: {getDayText(deliveryRequest?.option.days)}
                    </Typography>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <Button targetButton='Back' onClick={()=>updateFormState({confirmOrder: false, payerForm: true})}>
                    Назад
                </Button>
                <Button targetButton='Next' type="submit">
                    Продолжить
                </Button>
            </div>
        </form>
    )
}