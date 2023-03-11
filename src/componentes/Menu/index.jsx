import Cabecalho from '../Cabecalho'
import styles from './Menu.module.scss'
import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreendame from '../../assets/icones/surpreenda-me-inativo.png'


export function Menu() {
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt=""/>
                    <a href="/"> Inicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt=""/>
                    <a href="/"> Mais Curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt=""/>
                    <a href="/"> Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt=""/>
                    <a href="/"> Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreendame} alt=""/>
                    <a href="/"> Surpreendame</a>
                </li>
            </ul>
        </nav>
    )
}