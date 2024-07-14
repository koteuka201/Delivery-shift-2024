import { Button } from '../../../../../shared/Button/Button'
import { Typography } from '../../../../../shared/Typography/Typography'
import styles from './styles.module.scss'

interface OrderModalProps{
    onClick?: ()=>void
}

export const OrderModal=({onClick}:OrderModalProps)=>{
    return(
        <div className={styles.container}>
            <img src="/modalImg/Accept.png" alt="accept" className={styles.img}/>
            <Typography variant='h3'>
                Заявка отправлена
            </Typography>
            <Typography variant='p_16_medium'>
                Вы можете оплатить ваш заказ 
                в разделе «Профиль»
            </Typography>
            <div className={styles.btn}>
                <Button targetButton='Next' onClick={onClick}>
                    Посмотреть статус
                </Button>
            </div>
            
        </div>
    )
}