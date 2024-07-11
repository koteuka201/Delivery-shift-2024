import { useEffect } from 'react'
import styles from './styles.module.scss'

import { Plane, BusFront } from 'lucide-react'

import { Typography } from '../../../shared/Typography/Typography'
import { DeliveryTypeCard } from './DeliveryTypeCard/DeliveryTypeCard'
import { CalculateDelivery } from '../../../@types/api'

import { usePostCalculateDeliveryQuery } from '../../../hooks/usePostCalculateDeliveryQuery'
import { useDeliveryContext } from '../../../context/DeliveryContext'

export const DeliveryTypePage =()=>{

    const { mutate: calculateDelivery, data } = usePostCalculateDeliveryQuery()
    
    const { deliveryRequest , updateDeliveryRequest, deliveryPackage}=useDeliveryContext()
    
    useEffect(()=>{
        if(deliveryRequest && deliveryPackage!== undefined){
            const calculateData: CalculateDelivery={
                package: {
                    length: deliveryPackage.length,
                    width: deliveryPackage.width,
                    height: deliveryPackage.height,
                    weight: deliveryPackage.weight
                },
                senderPoint: {
                    latitude: deliveryRequest.senderPoint.latitude,
                    longitude: deliveryRequest.senderPoint.longitude
                },
                receiverPoint: {
                    latitude: deliveryRequest.receiverPoint.latitude,
                    longitude: deliveryRequest.receiverPoint.longitude
                }
            }
            calculateDelivery(calculateData)
        }
    },[])

    return(
        <div className={styles.containerWrapper}>
            <div className={styles.typesWrapper}>
                <Typography variant='h2'>
                    Способ отправки
                </Typography>
                <div className={styles.typesContainer}>
                    {data?.options && 
                        <>
                            <DeliveryTypeCard 
                                label='Экспресс доставка до двери'
                                price={data?.options[0].price}
                                days={data?.options[0].days}
                                icon={<Plane/>}
                                onClick={()=>updateDeliveryRequest({option: data?.options[0]})}
                            />
                            <DeliveryTypeCard 
                                label='Обычная доставка'
                                price={data?.options[1].price}
                                days={data?.options[1].days}
                                icon={<BusFront/>}
                                onClick={()=>updateDeliveryRequest({option: data?.options[1]})}
                            />
                        </>
                    }
                </div>
            </div>
        </div>
    )
}