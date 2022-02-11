import React from "react";
import ContainerCard from './ContainerCards.css'


function ContainerCards (props) {
    const {children}= props
    return (
        <main className={ContainerCard.ContainerCards}>
            {children}
        </main>
    )
}

export default ContainerCards