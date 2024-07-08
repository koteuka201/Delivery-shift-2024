import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

import { Select } from '../../../../shared/Select/Select'
import { Typography } from '../../../../shared/Typography/Typography'
import { useGetDeliveryPointsQuery } from '../../../../hooks/useGetDeliveyPointsQuery'

import { MapPin } from 'lucide-react'
import { Navigation } from 'lucide-react'

export const CalculateDeliveryForm = ()=>{
    const {data, isLoading} = useGetDeliveryPointsQuery()

    const [cityFrom, setCityFrom]=useState(data?.points[0])

    const handleCityFromChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedDeliveryPoint = data?.points.find(option => option.id === e.target.value)
        setCityFrom(selectedDeliveryPoint)
    }
    console.log(cityFrom)

    useEffect(()=>{
        setCityFrom(data?.points[0])
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
                {data && <Select 
                    options={data.points} 
                    icon={<MapPin/>} 
                    value={cityFrom?.name}
                    onChange={handleCityFromChange}
                />}
            </div>
            {/* <div className={styles.cityToContainer}>
                <Typography variant='p_14_medium'>
                    Город назначения
                </Typography>
                {data && <Select 
                    options={data.points} 
                    icon={<Navigation/>} 
                    onChange={handleCityFromChange}
                />}
            </div> */}
        </form>
    )
}