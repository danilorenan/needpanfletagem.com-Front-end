import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 14rem;
    display: flex;
    background-color: var(--primary);
    width: 100%;
    flex-direction: column;

    .footer-up {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10rem;
        padding: 1rem;
    }

    .footer-down {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--dark);
        width: 100%;
        height: 4rem;
        color: #fff;
        flex-direction: column;

        h3 {
            color: #fff;
            font-size: 0.8rem;
            margin: 0.2rem;
        }
        span {
            font-size: 0.8rem;
        }
        a {
            text-decoration: none;
            color: #fff;

            :hover {
                color: var(--grey);
            }
        }
    }
`
export const LogoContainer = styled.div`
    margin: 1rem;
`
export const LogoImage = styled.img`
    width: 6rem;
    height: 4rem;
`
export const LinksContainer = styled.div`
    color: #fff;
    border-left: 1px solid #fff;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    li {
        color: #fff;
        font-size: 0.8rem;
        line-height: 1.5rem;
        :hover {
            color: var(--dark);
        }
    }
`