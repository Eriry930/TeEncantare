/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Cards.css'


function Cards(props) {
    const {children} = props;
    const {menu, 
        price, 
        type,
        products,
        image 
        } = props;

        return (
            <section className={Cards.Card}> 
            {children}
            

            <div className='card'>

                    <div>
                        <h2>{menu}</h2>
                    </div>
                    <div>
                        <p>{type}</p>
                    </div> 
                    <div>
                        <p>{products}</p>
                    </div> 
                    <div>
                        <p>{price}</p>
                    </div>    
                    <div>
                        <img src = {image} alt={menu} className='uno'/>
                    </div>

                </div>
            
    
            </section>
            );
        }



export default Cards