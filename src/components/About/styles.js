import styled from "styled-components";

export const AboutContainer = styled.div`
    height: 35rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dark);
   
`
export const AboutInfos = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 40rem;
    color: #fff;

    border: 9px double var(--primary);
`
export const AboutTitle = styled.h1`
    font-size: 2rem;
    color: #fff;
    span {
        text-decoration: underline;
    }
`
export const AboutText = styled.span`
    font-size: 1.2rem;
    width: 25rem;
    margin: 1rem;
`
export const AboutCardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
`
export const AboutCard = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: var(--primary);
    width: 11rem;
    height: 3rem;
`
export const AboutTextDown = styled.span`
    width: 28rem;
    margin: 1rem;
`
export const MoreButton = styled.div`
    cursor: pointer;    
    a {
        text-decoration: underline;
        padding: 0.2rem;
        :hover {
            color: #fff;
            background-color: var(--primary);
        }
    }
`