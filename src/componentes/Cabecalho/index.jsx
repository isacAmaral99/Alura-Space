import Logo from './logo.png'
import Busca from './search.png'
import styles from './Cabecalho.module.scss'
export default function Cabecalho (){
    return(
        <header className={styles.cabecalho}>
            <img src={Logo} alt="Logo AluraSpace"/>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text"
                placeholder="Oque voce procura"/>
                <img src={Busca} alt="Icone de busca" />
            </div>
        </header>
    )
}