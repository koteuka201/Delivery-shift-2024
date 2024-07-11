import styles from './styles.module.scss'
import { FormData } from "../../components/pages/PersonalDataPage/PersonalDataPage"
import { Typography } from '../Typography/Typography'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

interface PersonalDataFormProps{
    label: string,
    formData: FormData[],
    onClickContinue?: ()=> void,
    onClickBack?: ()=> void
}

export const PersonalDataForm=({label, formData, onClickContinue, onClickBack}:PersonalDataFormProps)=>(
    <form className={styles.container}>
        <Typography variant='h2'>
            {label}
        </Typography>
        {formData.map((item,index)=>(
            <div key={index} className={styles.defaultMargin}>
                <Input 
                    label={item.label}
                    value={item.value} 
                    placeholder={item.placeholder} 
                    onChange={()=>item.onChange}
                />
            </div>
        ))}
        <div className={styles.btnContainer}>
            <Button targetButton='Back' onClick={onClickBack}>
                Назад
            </Button>
            <Button targetButton='Next' onClick={onClickContinue}>
                Назад
            </Button>
        </div>
    </form>
)