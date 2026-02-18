import React from 'react';

function Hero() {
    return (
        <section className="container-fluid " id="supportHero">
            <div className="p-4 " id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className="row p-5 m-3">
                <div className="col-6 p-3">
                    <h1 className="fs-4 mb-5">
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input placeholder="Eg. how do I activate F&O" />
                    <br /><br />
                    <ul className='menu'>
                    <li><a href="">Track account opening</a></li>
                    <li><a href="">Track segment activation</a></li>
                    <li><a href="">Intraday margins</a></li>
                    <li><a href="">Kite user manual</a></li>
                    </ul>
                </div>
                <div className="col-6 p-3">
                    <h1 style={{marginLeft:"5rem"}} className=" mb-3 fs-3">Featured</h1>
                    <ol  style={{marginLeft:"4rem",display:"flex",flexDirection:"column",
                        gap:"1rem"
                    }}>
                        <li>
                            <a href="">Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href="">Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );

}

export default Hero;