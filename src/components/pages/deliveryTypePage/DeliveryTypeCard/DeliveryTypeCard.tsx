import styles from './styles.module.scss'

import { getDayText } from "../../../../utils/helpers/getDayText"
import { Typography } from '../../../../shared/Typography/Typography'

interface DeliveryTypeCardProps{
    label: string,
    price: number,
    days: number,
    icon: JSX.Element
    onClick?: ()=>void
}

export const DeliveryTypeCard=({label, price, days, icon, onClick}:DeliveryTypeCardProps)=>{
    return(
        <div className={styles.container} onClick={onClick}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <div className={styles.content}>
                <Typography variant='p_12_regular' className={styles.typography}>
                    {label} ₽
                </Typography>
                <Typography variant='h3' className={`${styles.price} ${styles.typography}`}>
                    {price} ₽
                </Typography>
                <Typography variant='p_12_regular' className={`${styles.days} ${styles.typography}`}>
                    {getDayText(days)}
                </Typography>
            </div>
        </div>
    )
}