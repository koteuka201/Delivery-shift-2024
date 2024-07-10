import styles from './styles.module.scss'

interface LabelProps extends React.ComponentProps<'label'>{
    onCLick?: ()=>void
    variant: 'underline'
}

export const Label=({onClick, variant, ...props}: LabelProps)=>{

    return(
        <label
            className={`${styles.label} ${styles[variant]}`}
            onClick={onClick}
            {...props}
        >
            {props.children}
        </label>
    )
}