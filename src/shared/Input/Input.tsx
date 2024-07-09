import { useId } from 'react'
import styles from './styles.module.scss'

interface InputProps extends React.ComponentProps<'input'>{
    isError?: boolean,
    label?: string,
    message?: string
}

export const Input = ({isError, label, message, ...props}:InputProps)=>{

    const id=useId()

    return(
        <div>
            {label && (
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}
            <input {...props} id={id} className={styles.input}/>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    )
}