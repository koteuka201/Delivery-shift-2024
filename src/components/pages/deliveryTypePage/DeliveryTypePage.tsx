import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

import { Plane, BusFront } from 'lucide-react'

import { Typography } from '../../../shared/Typography/Typography'
import { DeliveryTypeCard } from './DeliveryTypeCard/DeliveryTypeCard'
import { CalculateDelivery, DeliveryOption } from '../../../@types/api'

import { usePostCalculateDeliveryQuery } from '../../../hooks/usePostCalculateDeliveryQuery'
import { useDeliveryContext } from '../../../context/DeliveryContext'
import { ROUTES } from '../../../utils/constants/routes'


export const DeliveryTypePage =()=>{

    const navigate=useNavigate()

    const { mutate: calculateDelivery, data, isPending } = usePostCalculateDeliveryQuery()
    
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

    const handleClick = (option: DeliveryOption | undefined) => {
        if (!isPending) {
            updateDeliveryRequest({ option });
            navigate(ROUTES.PERSONALDATA);
        }
    }

    return(
        <div className={styles.containerWrapper}>
            <div className={styles.typesWrapper}>
                <Typography variant='h2'>
                    Способ отправки
                </Typography>
                <div className={styles.typesContainer}>
                    {/* {data?.options && 
                        <> */}
                            <DeliveryTypeCard 
                                label='Экспресс доставка до двери'
                                price={data?.options[1].price}
                                days={data?.options[1].days}
                                icon={<Plane/>}
                                onClick={() => handleClick(data?.options[1])}
                                isPending={isPending}
                            />
                            <DeliveryTypeCard 
                                label='Обычная доставка'
                                price={data?.options[0].price}
                                days={data?.options[0].days}
                                icon={<BusFront/>}
                                onClick={() => handleClick(data?.options[0])}
                                isPending={isPending}
                            />
                        {/* </>
                    } */}
                </div>
            </div>
        </div>
    )
}