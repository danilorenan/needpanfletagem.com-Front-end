import styled from "styled-components";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MenuIcon from '@material-ui/icons/Menu';

export const NavbarContainer = styled.div`
    height: 15rem;
    @media (max-width: 570px){
        height: 3rem;
    }
`

export const BannerContainer = styled.div`
    height: 12rem;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 570px){
        display: none;
        height: 0px;
    }
`
export const BannerImage = styled.img`
    width: 20rem;
    height: 10rem;
    @media (max-width: 570px){
        display: none;
    }
`
export const ContainerMenu = styled.div`
    height: 3rem;
    width: 100%;
    background: var(--primary);
    
    @media (max-width: 570px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;

    &.open{
        @media (max-width: 570px){
            transform: translateX(0);
            position: fixed;
            z-index: 1000;
            transition: all 0.5s ease;
            justify-content: space-around;
            align-items: center;
            font-size: 1rem;
        }
    }
    @media (max-width: 570px) {
        position: absolute;
        top: 0;
        right: 0;
        width: 50vw;
        height: 90vh;
        z-index: 1000;
        flex-direction: column;
        justify-content: space-between;
        transform: translateX(100%);
        transition: all 0.5s ease;
        background-color: var(--primary);
    }

    .icons-container {
        height: 3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 4rem;
        color: #fff;
        border: none;
    }

    li {
        margin: 0rem 1rem 0rem 1rem;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a { 
        text-decoration: none;
        position: relative;
        font-size: 1.2rem;
        cursor: pointer;
        
        .link-style {
            :after{
            height: 0;
            display: block;
            content: '';
            border-bottom: solid 3px #fff;  
            transform: scaleX(0);  
            transition: transform 250ms ease-in-out;
            transform-origin:100% 50%
        }
        :hover:after {
            transform: scaleX(1);
            transform-origin:0 50%;
        }
        }
    }
`
export const InstaIcon = styled(InstagramIcon)`
    cursor: pointer;
    color: #fff;
    border: none;
     
    :hover {
        color: var(--grey);
    }
`
export const FaceIcon = styled(FacebookIcon)`
    cursor: pointer;
    :hover {
        color: var(--grey);
    }
`
export const IconMenu = styled(MenuIcon)`
    display: none;
    cursor: pointer;
    opacity: 0;

    @media (max-width: 570px){
        opacity: 1;
        margin: 1rem;
        color: #fff;
    }
`
export const LogoImageMenu = styled.img`
    display: none;

    @media(max-width: 570px){
        display: block;
        width: 4rem;
        height: 2.5rem;
        border: 1px solid #fff;
        border-radius: 100%;
        margin: 0;
        margin: 1rem;
    }    
`