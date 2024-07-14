import { useForm } from 'react-hook-form'

import { Button } from '../../../../shared/Button/Button'
import { Typography } from '../../../../shared/Typography/Typography'
import styles from './styles.module.scss'
import { useDeliveryContext } from '../../../../context/DeliveryContext'
import { useEffect } from 'react'

interface PayerFormProps{
    value?: 'SENDER' | 'RECEIVER',
    onClickContinue: ()=> void,
    onClickBack?: ()=> void
}

export const PayerForm=({value, onClickContinue,onClickBack}:PayerFormProps)=>{

    const {deliveryRequest, updateDeliveryRequest}=useDeliveryContext()

    const {handleSubmit}=useForm()

    const onSubmit = () => {
        onClickContinue()
    }

    useEffect(()=>{
        if(!deliveryRequest?.payer){
            updateDeliveryRequest({payer: 'RECEIVER'})
        }
        
    },[])
    console.log(deliveryRequest?.payer);
    
    return(
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='h2'>
                Оплата доставки
            </Typography>
            <div className={styles.defaultMargin}>
                <div className={styles.radioBtnContainer}>
                    <input 
                        type='radio'
                        className={styles.radioBtn}
                        checked={deliveryRequest?.payer==='RECEIVER'}
                        onChange={()=>updateDeliveryRequest({payer: 'RECEIVER'})}
                    ></input>
                    <Typography variant='p_16_medium'>
                        Получатель
                    </Typography>
                </div>
                <div className={styles.radioBtnContainer}>
                    <input 
                        type='radio'
                        className={styles.radioBtn}
                        checked={deliveryRequest?.payer==='SENDER'}
                        onChange={()=>updateDeliveryRequest({payer: 'SENDER'})}
                    ></input>
                    <Typography variant='p_16_medium'>
                        Отправитель
                    </Typography>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <Button targetButton='Back' onClick={onClickBack}>
                    Назад
                </Button>
                <Button targetButton='Next' type="submit" onClick={onClickContinue}>
                    Продолжить
                </Button>
            </div>
        </form>
    )
}