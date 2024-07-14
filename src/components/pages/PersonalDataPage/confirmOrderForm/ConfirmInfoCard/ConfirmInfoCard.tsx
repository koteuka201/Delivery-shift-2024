import { Typography } from '../../../../../shared/Typography/Typography'
import styles from './styles.module.scss'
import { Pencil } from 'lucide-react'

interface ConfirmInfoCardProps{
    parametrName: string,
    subParametrName1?: string,
    subParametrValue1?: string,
    subParametrName2?: string,
    subParametrValue2?: string,
    onClick: ()=>void
}

export const ConfirmInfoCard=({
    parametrName,
    subParametrName1,
    subParametrValue1,
    subParametrName2,
    subParametrValue2,
    onClick}:ConfirmInfoCardProps)=>{

    return(
        <div className={styles.container}>
            <div className={styles.upperSide}>
                <Typography variant='p_16_medium'>
                    {parametrName}
                </Typography>
                <Pencil style={{cursor: 'pointer'}} onClick={onClick}/>
            </div>
            <div className={styles.lowerSide}>
                <div className={styles.contentContainer}>
                    <Typography variant='p_12_regular'>
                        {subParametrName1}    
                    </Typography>
                    <Typography variant='p_16_regular'>
                        {subParametrValue1}    
                    </Typography>    
                </div>
                <div className={styles.contentContainer}>
                    <Typography variant='p_12_regular'>
                        {subParametrName2}    
                    </Typography>
                    <Typography variant='p_16_regular'>
                        {subParametrValue2}    
                    </Typography>    
                </div>
            </div>
        </div>
    )
}