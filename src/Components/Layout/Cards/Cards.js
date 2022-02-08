import React from 'react';
import uno from './images/uno.jpeg';

import './Cards.css'



class Card extends React.Component {
    render () {
        return (
            <div className='Cards' 
            style={{
                backgroundImage: 'url({dos})'
            }}>
                <div className='card'>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>

                   <div>
                        <h1 className='h1'> Menu 1 </h1>
                    </div>  
                    <div>
                        <img className='uno' src={uno} alt='uno'/>
                    </div>

                </div>
            </div>
        )
    }

}

export default Card