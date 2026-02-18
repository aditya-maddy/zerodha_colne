import React from 'react';
import Hero from './Hero.jsx';
import Awards from './Awards.jsx';
import Stats from './Stats.jsx';
import Pricing from './Pricing.jsx';
import Educaton from './Education.jsx';

import OpenAccount from '../OpenAccount.jsx';


function HomePage() {
    return (
        <>
            
            <Hero />
            <Awards/>
            <Stats/>
            <Pricing/>
            <Educaton/>
            <OpenAccount/>
            

        </>
    );
}

export default HomePage;