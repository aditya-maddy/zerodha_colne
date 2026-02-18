import React from "react";
import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgUrl="media\images\kite.png"
        prodName="Kite"
        prodDesription="Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices."
        tryDemo="Try demo "
        learnMore="Learn more "
        googlePlay=""
        appStore=""
      />
      <RightSection
        prodName="Console"
        prodDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
        imgUrl="media\images\console.png"
      />

      <LeftSection
        imgUrl="media\images\coin.png"
        prodName="Coin"
        prodDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=" "
        learnMore=" "
        
      />
      <RightSection
        prodName="Kite Connect API"
        prodDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
        imgUrl="media\images\kiteconnect.svg"
      />

      <LeftSection
        imgUrl="media\images\varsity.png"
        prodName="Varsity mobile"
        prodDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo "
        learnMore="Learn more "
        googlePlay=""
        appStore=""
      />

      
      <Universe />
    </>
  );
}

export default ProductPage;
