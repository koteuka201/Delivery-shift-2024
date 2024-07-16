import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './styles.module.scss'

import { getDayText } from "../../../../utils/helpers/getDayText"
import { Typography } from '../../../../shared/Typography/Typography'

interface DeliveryTypeCardProps{
    label?: string,
    price?: number,
    days?: number,
    icon: JSX.Element
    onClick?: ()=>void,
    isPending?: boolean
}

export const DeliveryTypeCard=({label, price, days, icon, onClick,isPending}:DeliveryTypeCardProps)=>{
    return(
        <div className={styles.container} onClick={onClick}>
            <div className={styles.iconWrapper}>
                {isPending ? (
                    <Skeleton circle height={48} width={48}/>
                ):(
                    <>
                        {icon}
                    </>
                )}
            </div>
            <div className={styles.content}>
                {isPending ? (
                        <>
                            <Skeleton width="50%" height={16}/>
                            <Skeleton width="15%" height={20} className={styles.price}/>
                            <Skeleton width="25%" height={16} className={styles.days}/>
                        </>
                    ) : (
                        <>                       
                            <Typography variant='p_12_regular' className={styles.typography}>
                                {label} ₽
                            </Typography>
                            <Typography variant='h3' className={`${styles.price} ${styles.typography}`}>
                                {price} ₽
                            </Typography>
                            <Typography variant='p_12_regular' className={`${styles.days} ${styles.typography}`}>
                                {getDayText(days)}
                            </Typography>
                        </>
                    )
                }
            </div>
        </div>
    )
}