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
`
export const WhatsText = styled.div`
    background-color: var(--dark);
    height: 1.5rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 6rem;
    padding: 0.2rem;
    border-radius: 4px;
    cursor: pointer;
`
export const WhatsIcon = styled.img`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
`