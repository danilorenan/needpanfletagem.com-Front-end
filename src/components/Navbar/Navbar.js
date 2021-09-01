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
                            <a className='link-style'>Home</a>
                        </li>
                    </Link>
                    <Link style={{listStyle: 'none'}} to='/Sobre'>
                        <li>
                            <a className='link-style'>Sobre nós</a>
                        </li>
                    </Link>
                    <Link style={{listStyle: 'none'}} to='/Galeria'>
                        <li>
                            <a className='link-style'>Galeria</a>
                        </li>
                    </Link>
                    <Link style={{listStyle: 'none'}} to='/Contato'>
                        <li>
                            <a className='link-style'>Contato</a>
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
