import React from 'react';
function Hero() {
    return (
        <div className=' container text-center p-5 mb-5'>
            <div className=" row text-center " >
                <img className='mb-5 ' src="media/images/homeHero.png" alt=" Hero IMG" style={{width:"100%"}} />
                <h1>Invest in everything</h1>
                <p>Online platform to Invest in stock, derivatives, mutual fund , and more</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;