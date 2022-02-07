import React from 'react';
import uno from './Assets/images/uno.jpeg';
// no puedo importar hoja de estilosn


class Card extends React.Component {
    render () {
        return (
            <div className='Cards'>
                <div>
                    <div>
                        <img src={uno} alt='uno'/>
                    </div>
                    <div>
                        <h1>Titulo</h1>
                        <p>Descripcion mas o menos laga</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Card