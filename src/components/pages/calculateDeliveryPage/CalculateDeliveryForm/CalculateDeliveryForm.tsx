import styles from './styles.module.scss'

import { Select } from '../../../../shared/Select/Select'
import { useGetDeliveryPointsQuery } from '../../../../hooks/useGetDeliveyPointsQuery'

import { MapPin } from 'lucide-react'

export const CalculateDeliveryForm = ()=>{
    const {data} = useGetDeliveryPointsQuery()

    return(
        <form className={styles.container}>
            <div className={styles.h2Container}>
                <h2>Рассчитать доставку</h2>
            </div>
            <div className={styles.cityFromContainer}>
                <div>Город отправки</div>
                {data && <Select options={data.points} icon={<MapPin/>}/>}
            </div>
        </form>
    )
}