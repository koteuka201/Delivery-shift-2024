import styles from './styles.module.scss'
import { CalculateDeliveryForm } from './CalculateDeliveryForm/CalculateDeliveryForm'

export const CalculateDeliveryPage=()=>{
    
    return(
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img src="/CalculateDeliveryPageImg/Frame.svg" alt="Frame" />
                </div>
                <div className={styles.h1Container}>
                    <h1>
                        ЦФТ доставка - быстро, удобно, надежно!
                    </h1>
                </div>
                <div className={styles.formContainer}>  
                    <CalculateDeliveryForm/>
                </div>
            </div>
        </div>
        
    )
}