import { useEffect } from 'react'

import styles from './styles.module.scss'

import { useGetDeliveryPointsQuery } from '../../../../hooks/useGetDeliveyPointsQuery'
import { useDeliveryContext } from '../../../../context/DeliveryContext'
import { Select } from '../../../../shared/Select/Select'
import { Typography } from '../../../../shared/Typography/Typography'

import { MapPin } from 'lucide-react'
import { Navigation } from 'lucide-react'

export const CalculateDeliveryForm = ()=>{
    const {data, isLoading} = useGetDeliveryPointsQuery()
    
    const { deliveryRequest , updateDeliveryRequest }=useDeliveryContext()

    const handleCityFromChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedDeliveryPoint = data?.points.find(option => option.id === e.target.value)
        updateDeliveryRequest({senderPoint: selectedDeliveryPoint})
    }

    const handleCityToChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedDeliveryPoint = data?.points.find(option => option.id === e.target.value)
        updateDeliveryRequest({receiverPoint: selectedDeliveryPoint})
    }

    useEffect(()=>{
        updateDeliveryRequest({senderPoint: data?.points[0]})
        updateDeliveryRequest({receiverPoint: data?.points[0]})
    },[isLoading])

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
                {data && deliveryRequest?.senderPoint &&  
                    <Select 
                        options={data.points} 
                        icon={<MapPin/>} 
                        value={deliveryRequest?.senderPoint.name}
                        onChange={handleCityFromChange}
                    />
                }
            </div>
            <div className={styles.cityToContainer}>
                <Typography variant='p_14_medium'>
                    Город отправки
                </Typography>
                {data && deliveryRequest?.receiverPoint &&  
                    <Select 
                        options={data.points} 
                        icon={<Navigation/>} 
                        value={deliveryRequest?.receiverPoint.name}
                        onChange={handleCityToChange}
                    />
                }
            </div>
        </form>
    )
}