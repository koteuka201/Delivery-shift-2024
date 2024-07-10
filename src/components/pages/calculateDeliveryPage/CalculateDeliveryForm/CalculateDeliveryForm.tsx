import { useEffect } from 'react'

import styles from './styles.module.scss'

import { useGetDeliveryPointsQuery } from '../../../../hooks/useGetDeliveyPointsQuery'
import { useGetDeliveryPackagesQuery } from '../../../../hooks/useGetDeliveryPackageQuery'
import { useDeliveryContext } from '../../../../context/DeliveryContext'
import { Select } from '../../../../shared/select/Select'
import { Typography } from '../../../../shared/Typography/Typography'

import { MapPin, Mail, Navigation } from 'lucide-react'
import { Button } from '../../../../shared/Button/Button'

export const CalculateDeliveryForm = ()=>{

    const {data, isLoading} = useGetDeliveryPointsQuery()
    const packagesQueryData = useGetDeliveryPackagesQuery().data
    const packageQueryIsLoading = useGetDeliveryPackagesQuery().isLoading
    
    const { deliveryRequest , updateDeliveryRequest, deliveryPackage, setDeliveryPackage }=useDeliveryContext()

    const handleCityFromChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedDeliveryPoint = data?.points.find(option => option.id === e.target.value)
        updateDeliveryRequest({senderPoint: selectedDeliveryPoint})
    }

    const handleCityToChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedDeliveryPoint = data?.points.find(option => option.id === e.target.value)
        updateDeliveryRequest({receiverPoint: selectedDeliveryPoint})
    }

    const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedDeliveryPoint = packagesQueryData?.packages.find(packages => packages.id === e.target.value)
        setDeliveryPackage(selectedDeliveryPoint)
    }

    useEffect(()=>{
        updateDeliveryRequest({senderPoint: data?.points[0]})
        updateDeliveryRequest({receiverPoint: data?.points[0]})
        setDeliveryPackage(packagesQueryData?.packages[0])
    },[isLoading,packageQueryIsLoading])

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
            <div className={styles.sizeContainer}>
                <Typography variant='p_14_medium'>
                    Размер посылки
                </Typography>
                {data && packagesQueryData?.packages &&  
                    <Select 
                        options={packagesQueryData?.packages} 
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
                
                >
                    Продолжить
                </Button>
            </div>
        </form>
    )
}