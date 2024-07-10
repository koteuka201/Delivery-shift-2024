import { forwardRef } from "react";

import { Input } from "../../../../../shared/Input/Input";
import { useDeliveryContext } from "../../../../../context/DeliveryContext";

import styles from './styles.module.scss'

interface PackageInputsProps {
    lengthRef: React.RefObject<HTMLInputElement>,
    widthRef: React.RefObject<HTMLInputElement>,
    heightRef: React.RefObject<HTMLInputElement>,
    weightRef: React.RefObject<HTMLInputElement>
}

export const PackageInputs = forwardRef<HTMLDivElement, PackageInputsProps>(({ lengthRef, widthRef, heightRef, weightRef }, ref) => {
    const { deliveryPackage, updateDeliveryPackage } = useDeliveryContext()

    return (
        <div className={styles.freeSizeOption} ref={ref}>
            Длина <Input 
                ref={lengthRef}
                value={deliveryPackage?.length} 
                onChange={(e) => {
                    const newValue = isNaN(parseFloat(e.target.value)) ? 1 : parseFloat(e.target.value);
                    updateDeliveryPackage({ length: newValue });
                }} 
                placeholder='см' 
                type='number'
                min={1}
            />
            Ширина <Input 
                ref={widthRef}
                value={deliveryPackage?.width} 
                onChange={(e) => {
                    const newValue = isNaN(parseFloat(e.target.value)) ? 1 : parseFloat(e.target.value);
                    updateDeliveryPackage({ width: newValue });
                }} 
                placeholder='см' 
                type='number'
                min={1}
            />
            Высота <Input 
                ref={heightRef}
                value={deliveryPackage?.height} 
                onChange={(e) => {
                    const newValue = isNaN(parseFloat(e.target.value)) ? 1 : parseFloat(e.target.value);
                    updateDeliveryPackage({ height: newValue });
                }} 
                placeholder='см' 
                type='number'
                min={1}
            />
            Вес <Input 
                ref={weightRef}
                value={deliveryPackage?.weight} 
                onChange={(e) => {
                    const newValue = isNaN(parseFloat(e.target.value)) ? 1 : parseFloat(e.target.value);
                    updateDeliveryPackage({ weight: newValue });
                }} 
                placeholder='кг' 
                type='number'
                min={1}
            />
        </div>
    )
})