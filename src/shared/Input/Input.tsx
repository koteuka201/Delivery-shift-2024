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
        <div>
            {label && (
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}
            <input {...props} ref={ref} id={id} className={styles.input} />
            {message && <p className={styles.message}>{message}</p>}
        </div>
    )
})