import styles from './styles.module.scss'

import { Select } from '../../../../shared/Select/Select'
import { Typography } from '../../../../shared/Typography/Typography'
import { useGetDeliveryPointsQuery } from '../../../../hooks/useGetDeliveyPointsQuery'

import { MapPin } from 'lucide-react'

export const CalculateDeliveryForm = ()=>{
    const {data} = useGetDeliveryPointsQuery()

    return(
        <form className={styles.container}>
            <div className={styles.h2Container}>
                <Typography variant='h2'>
                    Рассчитать доставку
                </Typography>
            </div>
            <div className={styles.cityFromContainer}>
                <Typography variant='p_14_medium'>
                    Город отправки
                </Typography>
                {data && <Select options={data.points} icon={<MapPin/>}/>}
            </div>
        </form>
    )
}