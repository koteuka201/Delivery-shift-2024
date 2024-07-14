import React from 'react'
import styles from './styles.module.scss'

interface ButtonProps extends React.ComponentProps<'button'>{
    targetButton: 'Next' | 'Back'
}

export const Button =({targetButton, ...props}:ButtonProps)=>{
    return(
        <button
            className={`${styles.button} ${targetButton==='Back' && styles.backStyle}`}
            {...props}
        >
            {props.children}
        </button>
    )
}