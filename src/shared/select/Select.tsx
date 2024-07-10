import styles from './styles.module.scss'

import { useRef, useState } from 'react'

import { Package, Point } from '../../@types/api'
import { Input } from '../Input/Input'
import { useDeliveryContext } from '../../context/DeliveryContext'
import { Tab } from '../Tab/Tab'

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

    const {deliveryPackage, updateDeliveryPackage}=useDeliveryContext()

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
                            // <div className={styles.tabContainer}>
                            //     <div 
                            //         className={`${styles.tab} ${tabType==='Concrete' && styles.selected}`}
                            //         onClick={()=>setTabType('Concrete')}
                            //     >
                            //         Примерные
                            //     </div>
                            //     <div 
                            //         className={`${styles.tab} ${tabType==='Free' && styles.selected}`}
                            //         onClick={()=>{
                            //             setTabType('Free')
                            //             updateDeliveryPackage({ name: ''})
                            //         }}
                            //     >
                            //         Точные
                            //     </div>

                            // </div>
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
                            <div className={styles.freeSizeOption}>
                                Длина <Input 
                                        ref={lengthInputRef}
                                        value={deliveryPackage?.length} 
                                        onChange={(e) => {
                                            const newValue = isNaN(parseFloat(e.target.value)) ? 1 : parseFloat(e.target.value)
                                            updateDeliveryPackage({ length: newValue })
                                        }} 
                                        placeholder='см' 
                                        type='number'
                                        min={1}
                                        />
                                Ширина <Input 
                                        ref={widthInputRef}
                                        value={deliveryPackage?.width} 
                                        onChange={(e) => {
                                            const newValue = isNaN(parseFloat(e.target.value)) ? 1 : parseFloat(e.target.value)
                                            updateDeliveryPackage({ width: newValue })
                                        }} 
                                        placeholder='см' 
                                        type='number'
                                        min={1}
                                        />
                                Высота <Input 
                                        ref={heightInputRef}
                                        value={deliveryPackage?.height} 
                                        onChange={(e) => {
                                            const newValue = isNaN(parseFloat(e.target.value)) ? 1 : parseFloat(e.target.value)
                                            updateDeliveryPackage({ height: newValue })
                                        }} 
                                        placeholder='см' 
                                        type='number'
                                        min={1}
                                        />
                                Вес <Input 
                                        ref={weightInputRef}
                                        value={deliveryPackage?.weight} 
                                        onChange={(e) => {
                                            const newValue = isNaN(parseFloat(e.target.value)) ? 1 : parseFloat(e.target.value)
                                            updateDeliveryPackage({ weight: newValue })
                                        }} 
                                        placeholder='кг' 
                                        type='number'
                                        min={1}
                                        />
                            </div>
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