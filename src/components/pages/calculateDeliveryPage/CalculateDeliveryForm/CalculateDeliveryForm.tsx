import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import styles from './styles.module.scss'

import { useGetDeliveryPointsQuery } from '../../../../hooks/useGetDeliveyPointsQuery'
import { useGetDeliveryPackagesQuery } from '../../../../hooks/useGetDeliveryPackageQuery'
import { useDeliveryContext } from '../../../../context/DeliveryContext'
import { Select } from '../../../../shared/select/Select'
import { Typography } from '../../../../shared/Typography/Typography'
import { ROUTES } from '../../../../utils/constants/routes'
import { MapPin, Mail, Navigation } from 'lucide-react'
import { Button } from '../../../../shared/Button/Button'
import { Label } from '../../../../shared/Label/Label'
import { useNavigate } from 'react-router-dom'

export const CalculateDeliveryForm = ()=>{

    const navigate= useNavigate()

    const getDeliveryPointsQuery = useGetDeliveryPointsQuery()
    const getPackagesQueryData = useGetDeliveryPackagesQuery()
    
    const { deliveryRequest , updateDeliveryRequest, deliveryPackage, setDeliveryPackage }=useDeliveryContext()

    const {handleSubmit } = useForm()

    const handleCityFromChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedDeliveryPoint = getDeliveryPointsQuery.data?.points.find(option => option.id === e.target.value)
        updateDeliveryRequest({senderPoint: selectedDeliveryPoint})
    }

    const handleCityToChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedDeliveryPoint = getDeliveryPointsQuery.data?.points.find(option => option.id === e.target.value)
        updateDeliveryRequest({receiverPoint: selectedDeliveryPoint})
    }

    const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedDeliveryPoint = getPackagesQueryData.data?.packages.find(packages => packages.id === e.target.value)
        setDeliveryPackage(selectedDeliveryPoint)
    }

    const onSubmit = () => {
        navigate(`${ROUTES.DELIVERY_TYPE}`)
    }

    useEffect(()=>{
        updateDeliveryRequest({senderPoint: getDeliveryPointsQuery.data?.points[0]})
        updateDeliveryRequest({receiverPoint: getDeliveryPointsQuery.data?.points[0]})
        setDeliveryPackage(getPackagesQueryData.data?.packages[0])
    },[getDeliveryPointsQuery.isLoading,getPackagesQueryData.isLoading])

    return(
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.h2Container}>
                <Typography variant='h2'>
                    Рассчитать доставку
                </Typography>
            </div>
            <div className={styles.cityFromContainer}>
                <Typography variant='p_14_medium'>
                    Город отправки
                </Typography>
                {getDeliveryPointsQuery.data && deliveryRequest?.senderPoint &&  
                    <Select 
                        options={getDeliveryPointsQuery.data.points} 
                        icon={<MapPin/>} 
                        value={deliveryRequest?.senderPoint.name}
                        onChange={handleCityFromChange}
                    />
                }
                <div className={styles.cityFastPick}>
                    <Label onClick={()=>updateDeliveryRequest({senderPoint: getDeliveryPointsQuery.data?.points[1]})} variant='underline'>
                        {getDeliveryPointsQuery.data?.points[1].name}
                    </Label>
                    <Label onClick={()=>updateDeliveryRequest({senderPoint: getDeliveryPointsQuery.data?.points[2]})} variant='underline'>
                        {getDeliveryPointsQuery.data?.points[2].name}
                    </Label>
                    <Label onClick={()=>updateDeliveryRequest({senderPoint: getDeliveryPointsQuery.data?.points[11]})} variant='underline'>
                        {getDeliveryPointsQuery.data?.points[11].name}
                    </Label>
                </div>
            </div>
            <div className={styles.cityToContainer}>
                <Typography variant='p_14_medium'>
                    Город отправки
                </Typography>
                {getDeliveryPointsQuery.data && deliveryRequest?.receiverPoint &&  
                    <Select 
                        options={getDeliveryPointsQuery.data.points} 
                        icon={<Navigation/>} 
                        value={deliveryRequest?.receiverPoint.name}
                        onChange={handleCityToChange}
                    />
                }
                <div className={styles.cityFastPick}>
                    <Label onClick={()=>updateDeliveryRequest({receiverPoint: getDeliveryPointsQuery.data?.points[0]})} variant='underline'>
                        {getDeliveryPointsQuery.data?.points[0].name}
                    </Label>
                    <Label onClick={()=>updateDeliveryRequest({receiverPoint: getDeliveryPointsQuery.data?.points[2]})} variant='underline'>
                        {getDeliveryPointsQuery.data?.points[2].name}
                    </Label>
                    <Label onClick={()=>updateDeliveryRequest({receiverPoint: getDeliveryPointsQuery.data?.points[11]})} variant='underline'>
                        {getDeliveryPointsQuery.data?.points[11].name}
                    </Label>
                </div>
            </div>
            <div className={styles.sizeContainer}>
                <Typography variant='p_14_medium'>
                    Размер посылки
                </Typography>
                {getDeliveryPointsQuery.data && getPackagesQueryData.data?.packages &&  
                    <Select 
                        options={getPackagesQueryData.data?.packages} 
                        type='package'
                        icon={<Mail/>} 
                        value={`${deliveryPackage?.name}  ${deliveryPackage?.length}x${deliveryPackage?.width}x${deliveryPackage?.height} см`}
                        onChange={handlePackageChange}
                    />
                }
            </div>
            <div className={styles.btnContainer}>
                <Button 
                    targetButton='Next'
                    type="submit"
                >
                    Продолжить
                </Button>
            </div>
        </form>
    )
}