import { forwardRef, useId } from 'react'
import styles from './styles.module.scss'

interface InputProps extends React.ComponentProps<'input'>{
    isError?: boolean,
    label?: string,
    message?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ isError, label, message, ...props }, ref) => {
    const id = useId()

    return (
        <div className={styles.container}>
            <div className={styles.label}>
                {label && (
                    <label htmlFor={id}>
                        {label}
                    </label>
                )}
            </div>
            <input {...props} ref={ref} id={id} className={styles.input} />
            {message && <p className={styles.message}>{message}</p>}
        </div>
    )
})