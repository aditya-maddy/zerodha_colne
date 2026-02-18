import React from 'react';
import Hero from './Hero.jsx';
import Brokerage from './Brokerage.jsx'

import OpenAccount from '../OpenAccount.jsx';



function PricingPage() {
    return (
        <>
            
            <Hero />
            <OpenAccount/>
            <Brokerage />
            
        </>
    );
}

export default PricingPage;