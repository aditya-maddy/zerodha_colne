import React from 'react';
function RightSection({ prodName, prodDesription, learnMore, imgUrl }) {
    return (
        <div className="container p-5  ">
            <div className="row  pt-4 ">

                <div  className="col-4 pt-5 "><br /><br /><br /><br />
                    <h1  className="fs-4 mb-4 pt-3">{prodName}</h1>
                    <p style={{ lineHeight: "1.8" }}>{prodDesription}</p>
                    <div>
                        <a href={learnMore} > Learn more <i class="fa-solid fa-arrow-right-long" /> </a>
                    </div>
                    <br />

                </div>
                <div className="col-1"></div>
                <div className="col-7">
                    <img style={{ marginLeft:"50px",width:"100%",height:"100%" }} src={imgUrl} />
                </div>
            </div>
        </div>

    );
}

export default RightSection;