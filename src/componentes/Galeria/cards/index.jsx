import React from "react";


import Card from "../card";

export default function Cards({fotos, styles}){
    return(
        <ul className={styles.galeria__cards}>
        {fotos.map((foto) => {
          return (
            
              <Card foto={foto} styles={styles} />
            
          );
        })}
      </ul>
    )
}