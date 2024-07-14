import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

import { UserRound, Clock5, LogIn, LogOut } from 'lucide-react'

import { ROUTES } from '../../utils/constants/routes'
import { Typography } from '../../shared/Typography/Typography'

export const Header=()=>(
    <header className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <Link to={ROUTES.MAIN}>
                    <img src="/header/LogoShift.svg" alt="ШИФТDELIVERY" />
                </Link>
                <div className={styles.headerItem}>
                    <UserRound/>
                    <Typography variant='p_16_medium'>
                        Профиль
                    </Typography>
                </div>
                <div className={styles.headerItem}>
                    <Clock5/>
                    <Typography variant='p_16_medium'>
                        История
                    </Typography>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.headerItem}>
                    <LogOut/>
                    <Typography variant='p_16_medium'>
                        Выйти
                    </Typography>
                </div>
            </div>
        </div>
    </header>
)