import styles from './styles.module.scss'

import { Point } from '../../@types/api'
import { useState } from 'react'

interface SelectProps extends React.ComponentProps<'select'>{
    options: Point[]
    icon?: JSX.Element
}

export const Select = ({options, icon,value, onChange}: SelectProps)=>{

    const [isOpen, setIsOpen]=useState(false)

    const handleSelectOption=(option: Point)=>{

        if (onChange) {
            const e = {
                target: { value: option.id }
            } as React.ChangeEvent<HTMLSelectElement>;
            onChange(e)
        }
        setIsOpen(false)
    }
        
    return(
        <div 
            className={styles.container} 
            onClick={()=>setIsOpen(!isOpen)}
        >
            <span className={styles.icon}>{icon}</span>
            <div className={`${styles.select} ${isOpen && styles.open}`}>
                <div className={styles.value}>
                    {value}
                </div>
                {isOpen && (
                    <div className={styles.options}>
                        {options.map((option)=>(
                            <div
                                key={option.id}
                                onClick={()=>handleSelectOption(option)}
                                className={styles.option}
                            >
                                {option.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* <select 
                className={styles.select}
                onChange={onChange}
            >
                {options.map((option)=>(
                    <option key={option.id} value={option.id}>
                        {option.name}     
                    </option>
                ))}
            </select> */}
        </div>
    )
}