import React from 'react';
import './Cards.css'


function Cards(props) {
    const {children} = props;
    const {Menu, 
        Price, 
        Type,
        Image 
        } = props;

        return (
            <section className={Cards.Card}> 
            {children}
            

            <div className='card'>
                    <div >
                        <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>

                    <div>
                        <h2>{Menu}</h2>
                    </div>
                    <div>
                        <p>{Price}</p>
                    </div>    
                    <div>
                        <p>{Type}</p>
                    </div>    
                    <div>
                        <imagen src = {Image} className='uno'/>
                    </div>

                </div>
            
    
            </section>
            );
        }



export default Cards