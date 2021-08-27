import React from 'react'
import { FooterContainer, 
    LinksContainer, 
    LogoContainer, 
    LogoImage } from './styles';
import ImageLogo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterContainer>
            <div className='footer-up'>
                <LogoContainer>
                    <LogoImage src={ImageLogo}/>
                </LogoContainer>
                <LinksContainer>
                        <Link style={{listStyle: 'none', textDecoration: 'none'}} to='/'>
                            <li>
                                Home
                            </li>
                        </Link>
                        <Link style={{listStyle: 'none', textDecoration: 'none'}} to='/Sobre'>
                            <li>
                                Sobre Nós
                            </li>
                        </Link>
                        <Link style={{listStyle: 'none', textDecoration: 'none'}} to='/Galeria'>
                            <li>
                                Galeria
                            </li>
                        </Link>
                        <Link style={{listStyle: 'none', textDecoration: 'none'}} to='/Contato'>
                            <li>
                                Contato
                            </li>
                        </Link> 
                </LinksContainer>
            </div>
            <div className='footer-down'>
                <h3>Desenvolvido por <a href='https://github.com/danilorenan'>Danilo Santos</a></h3>
                <span><a href='https://www.instagram.com/danilorennan/'>Contato</a></span>
            </div>
        </FooterContainer>
    )
}

export default Footer;
