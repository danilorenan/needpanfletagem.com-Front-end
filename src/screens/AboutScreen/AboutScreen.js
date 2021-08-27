import React from 'react'
import About from '../../components/About/About';
import Car from '../../components/Car/Car';
import { AboutScreenContainer } from './styles';
import Contact from '../../components/Contact/Contact';

const AboutScreen = () => {
    return (
        <AboutScreenContainer>
            <About />
            <Car />
            <Contact />
        </AboutScreenContainer>
    )
}

export default AboutScreen;
