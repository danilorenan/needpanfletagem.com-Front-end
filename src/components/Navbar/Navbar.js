import React from 'react'
import { BannerContainer, 
    BannerImage, 
    ContainerMenu, 
    FaceIcon, 
    InstaIcon, 
    Menu, 
    NavbarContainer } from './styles';
import ImageBanner from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <NavbarContainer>
            <BannerContainer>
                <BannerImage src={ImageBanner} />
            </BannerContainer>
            <ContainerMenu>
                <Menu>
                    <Link style={{listStyle: 'none'}} to='/'>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link style={{listStyle: 'none'}} to='/Sobre'>
                        <li>
                            Sobre Nós
                        </li>
                    </Link>
                    <Link style={{listStyle: 'none'}} to='/Galeria'>
                        <li>
                            Galeria
                        </li>
                    </Link>
                    <Link style={{listStyle: 'none'}} to='/Contato'>
                        <li>
                            Contato
                        </li>
                    </Link> 
                    <div className='icons-container'>
                        <a style={{color:'#fff'}} href='https://www.instagram.com/needpanfletagem/'><InstaIcon /></a>
                        <a style={{color:'#fff'}} href='https://www.facebook.com/NeedPanfletagemeDivulgacoes/'><FaceIcon/></a>
                    </div>
                </Menu>
            </ContainerMenu>
        </NavbarContainer>
    )
}

export default Navbar;
