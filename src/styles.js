import styled from 'styled-components';

export const AppContainer = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: relative;
`
export const WhatsContainer = styled.div`
    width: 10rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 100;
    right: 0;
    bottom: 0;
    margin: 1rem;
    animation: pulse 1s ease-in 3s;
    -webkit-animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -webkit-animation-delay: 0s;

    @keyframes pulse {
        0% {
        }

        5%,25% {
            transform: rotate(2deg);
            transform: rotate(4deg);
            transform: rotate(6deg);
            
        }

        15%,35% {
            transform: rotate(-2deg);
            transform: rotate(-4deg);
            transform: rotate(-6deg);
        }

        40% {
            transform: none;
        }
    }
    a {
        text-decoration: none;
    }
`
export const WhatsText = styled.div`
    background-color: var(--dark);
    height: 2rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 7rem;
    padding: 0.2rem;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    font-size: 0.8rem;
    margin-right: 0.5rem;
`
export const WhatsIcon = styled.img`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
`