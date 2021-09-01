import styled from "styled-components";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

export const NavbarContainer = styled.div`
    height: 15rem;
`

export const BannerContainer = styled.div`
    height: 12rem;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BannerImage = styled.img`
    width: 20rem;
    height: 10rem;
`
export const ContainerMenu = styled.div`
    height: 3rem;
    width: 100%;
    background: var(--primary);  
`
export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;

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