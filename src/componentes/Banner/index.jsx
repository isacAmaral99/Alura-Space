import BannerImg from "./banner.png";

import styles from "./Banner.module.scss"

export default function Banner(){
    return(
                <div className={styles.banner}>
                    <h1>
                        A Galeria mais completa do espaço
                    </h1>
                    <img src={BannerImg} alt="A imagem da terra sendo vista pelo espaço" />
                </div>
    )
}