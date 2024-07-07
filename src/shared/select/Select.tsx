import styles from './styles.module.scss'

import { Point } from '../../@types/api'

interface SelectProps extends React.ComponentProps<'select'>{
    options: Point[]
    icon?: JSX.Element
}

export const Select = ({options, icon}: SelectProps)=>{

    return(
        <div className={styles.container}>
            <span className={styles.icon}>{icon}</span>
            <select className={styles.select}>
                {options.map((option)=>(
                    <option key={option.id} value={option.id}>
                        {option.name}     
                    </option>
                ))}
            </select>
        </div>
    )
}