import styles from './styles.module.scss'

interface TabProps{
    nameTab1: string,
    nameTab2: string,
    tabType: 'Concrete' | 'Free',
    onClickTab1: ()=> void,
    onClickTab2: ()=> void,
}

export const Tab = ({nameTab1, nameTab2, tabType, onClickTab1, onClickTab2}:TabProps)=>{
    return(
        <div className={styles.tabContainer}>
            <div 
                className={`${styles.tab} ${tabType==='Concrete' && styles.selected}`}
                onClick={onClickTab1}
            >
                {nameTab1}
            </div>
            <div
                className={`${styles.tab} ${tabType==='Free' && styles.selected}`}
                onClick={onClickTab2}
            >
                {nameTab2}
            </div>
        </div>
    )
}