import styles from './styles.module.scss'
import { CalculateDeliveryForm } from './CalculateDeliveryForm/CalculateDeliveryForm'
import { Typography } from '../../../shared/Typography/Typography'

export const CalculateDeliveryPage=()=>{
    
    return(
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img src="/CalculateDeliveryPageImg/Frame.png" alt="Frame" />
                </div>
                <div className={styles.h1Container}>
                    <Typography variant='h1'>
                        ЦФТ доставка - быстро, удобно, надежно!
                    </Typography>
                </div>
                <div className={styles.formContainer}>  
                    <CalculateDeliveryForm/>
                </div>
            </div>
        </div>
        
    )
}