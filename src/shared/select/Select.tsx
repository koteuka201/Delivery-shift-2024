import styles from './styles.module.scss'

import { useRef, useState } from 'react'

import { Package, Point } from '../../@types/api'

interface SelectProps extends React.ComponentProps<'select'>{
    options: Point[] | Package[]
    type?: string,
    icon?: JSX.Element
}

export const Select = ({options, icon, type, value, onChange}: SelectProps)=>{

    const [isSelectOpen, setIsSelectOpen]=useState(false)
    const [tabType, setTabType]=useState<'Concrete' | 'Free'>('Concrete')

    const containerRef = useRef<HTMLDivElement>(null)

    const handleSelectOption=(option: Point | Package)=>{

        if (onChange) {
            const e = {
                target: { value: option.id }
            } as React.ChangeEvent<HTMLSelectElement>;
            onChange(e)
        }
        setIsSelectOpen(false)
    }
    
    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
            setIsSelectOpen(false);
        }
    }

    return(
        <div 
            className={styles.container} 
            onBlur={handleBlur}
            tabIndex={-1}
        >
            <span className={styles.icon}>{icon}</span>
            <div className={`${styles.select} ${isSelectOpen && styles.open}`}>
                <div 
                    className={styles.value}
                    onClick={()=>setIsSelectOpen(!isSelectOpen)}
                >
                    {value}
                </div>
                {isSelectOpen && (
                    <div className={styles.optionsContainer}>
                        {type==='package' && (
                            <div className={styles.tabContainer}>
                                <div 
                                    className={`${styles.tab} ${tabType==='Concrete' && styles.selected}`}
                                    onClick={()=>setTabType('Concrete')}
                                >
                                    Примерные
                                </div>
                                <div 
                                    className={`${styles.tab} ${tabType==='Free' && styles.selected}`}
                                    onClick={()=>setTabType('Free')}
                                >
                                    Точные
                                </div>

                            </div>
                        )}
                        <div className={styles.options}>
                            {options.map((option)=>(
                                <div
                                    key={option.id}
                                    onClick={()=>handleSelectOption(option)}
                                    className={styles.option}
                                >
                                    {type==='package' ? (
                                        ('width' && 'length' && 'height') in option && `${option.name} ${option.length}x${option.width}x${option.height} см`
                                    ) :(
                                        option.name
                                    )}
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}