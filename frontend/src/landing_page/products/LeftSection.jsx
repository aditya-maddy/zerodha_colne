import React from "react";
function LeftSection({
    imgUrl,
    prodName,
    prodDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container p-5 ">
            <div className="row  p-4">
                <div className="col-8">
                    <img style={{marginRight:"100px"}} src={imgUrl} />
                </div>

                <div className="col-4 pt-5">
                    <h1 className="fs-4 pt-3">{prodName}</h1>
                    <p className="text-muted" style={{ lineHeight: "1.8" }}>{prodDesription}</p>
                    <div>
                        <a href={tryDemo}> Try demo <i class="fa-solid fa-arrow-right-long" /> </a>
                        
                        <a href={learnMore} className="p-5"> Learn more <i class="fa-solid fa-arrow-right-long" /> </a>
                    </div>
                    <br />
                    <div>
                       
                        <a href={googlePlay}>
                            <img style={{ width: "35%" }} src="media\images\googlePlayBadge.svg" />
                        </a>
                        <a href={appStore} className="p-4">
                            <img style={{ width: "34%" }} src="media\images\appstoreBadge.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
