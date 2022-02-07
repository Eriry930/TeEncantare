import React from 'react';
import uno from './images/uno.jpeg';
import './Cards.css'



class Card extends React.Component {
    render () {
        return (
            <div className='Cards'>
                <div className='card'>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                       
                    <div>
                        <img className='uno' src={uno} alt='uno'/>
                    </div>
                    <div>
                        <h1>Titulo</h1>
                    </div>
                </div>
            </div>
        )
    }

}

export default Card