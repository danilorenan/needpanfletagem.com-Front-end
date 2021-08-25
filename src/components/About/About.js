import React from 'react'
import { AboutContainer, 
    AboutText, 
    AboutTitle,
    AboutCardsContainer,
    AboutCard,
    AboutTextDown, 
    MoreButton,
    AboutInfos} from './styles';

const About = () => {
    return (
        <AboutContainer>
            <AboutInfos>
                <AboutTitle><span>S</span>obre nós</AboutTitle>
                <AboutText>Atendemos empresas e comércios em toda a região do vale do Itajaí, em serviços de divulgação e propagandas de rua. Sendo especializada em distribuição de:</AboutText>
                <AboutCardsContainer>
                    <AboutCard>Panfletos</AboutCard>
                    <AboutCard>Tablóides</AboutCard>
                    <AboutCard>Cartões</AboutCard>
                </AboutCardsContainer>
                <AboutTextDown>Preparamos uma equipe bem treinada e motivada, para entregar serviços com qualidade e agilidade. <strong>Sempre cumprindo os prazos contratados.</strong></AboutTextDown>
                <MoreButton><a>Mais sobre nós...</a></MoreButton>
            </AboutInfos>
        </AboutContainer>
    )
}

export default About;
