import React, { FC, HTMLProps } from 'react'
import * as styles from './styles.module.scss'
import Logo from '../Logo/Logo'

export interface IHeaderProps extends HTMLProps<HTMLDivElement> {}

const Header: FC<IHeaderProps> = (props) => {
    return (
        <div className={styles.headerContainer} {...props}>
            <div className={styles.headerLogo}>
                <Logo className={styles.logo}/>
            </div>
            {props.children}
        </div>
    )
}
  
export default Header