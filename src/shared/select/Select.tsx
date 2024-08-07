import styles from './styles.module.scss'

import { useRef, useState } from 'react'

import { Package, Point } from '../../@types/api'
import { useDeliveryContext } from '../../context/DeliveryContext'
import { Tab } from '../Tab/Tab'
import { PackageInputs } from '../../components/pages/calculateDeliveryPage/CalculateDeliveryForm/PackageInputs/PackageInputs'

interface SelectProps extends React.ComponentProps<'select'>{
    options: Point[] | Package[]
    type?: string,
    icon?: JSX.Element
}

export const Select = ({options, icon, type, value, onChange}: SelectProps)=>{

    const [isSelectOpen, setIsSelectOpen]=useState(false)
    const [tabType, setTabType]=useState<'Concrete' | 'Free'>('Concrete')

    const containerRef = useRef<HTMLDivElement>(null)
    const lengthInputRef = useRef<HTMLInputElement>(null)
    const widthInputRef = useRef<HTMLInputElement>(null)
    const heightInputRef = useRef<HTMLInputElement>(null)
    const weightInputRef = useRef<HTMLInputElement>(null)

    const {updateDeliveryPackage}=useDeliveryContext()

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
        if (!containerRef.current?.contains(e.relatedTarget as Node)
            && e.relatedTarget !== lengthInputRef.current
            && e.relatedTarget !== widthInputRef.current
            && e.relatedTarget !== heightInputRef.current
            && e.relatedTarget !== weightInputRef.current) {
            setIsSelectOpen(false)
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
                            <Tab 
                                nameTab1={'Примерный'}
                                nameTab2={'Определенный'}
                                tabType={tabType}
                                onClickTab1={()=>setTabType('Concrete')}
                                onClickTab2={()=>{
                                    setTabType('Free')
                                    updateDeliveryPackage({ name: ''})
                                }}
                            />
                        )}
                        {type==='package' && tabType==='Free' ? (
                            <PackageInputs
                                lengthRef={lengthInputRef}
                                widthRef={widthInputRef}
                                heightRef={heightInputRef}
                                weightRef={weightInputRef}
                            />
                        ) : (
                            <div className={styles.options}>
                                {options.map((option)=>(
                                    <div
                                        key={option.id}
                                        onClick={()=>handleSelectOption(option)}
                                        className={styles.option}
                                    >
                                        {type==='package' ? (
                                            ('width' && 'length' && 'height') in option && 
                                            `${option.name} ${option.length}x${option.width}x${option.height} см`
                                        ) :(
                                            option.name
                                        )}
                                        
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}