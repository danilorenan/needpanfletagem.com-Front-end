import styled from "styled-components";

export const AboutContainer = styled.div`
    height: 35rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dark);
    flex-wrap: wrap;
   
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

    @media (max-width: 657px){
        width: 30rem;
    }
    @media (max-width: 493px){
        width: 20rem;
        height: 30rem;
        justify-content: space-between;
    }
`
export const AboutTitle = styled.h1`
    font-size: 2rem;
    color: #fff;
    @media (max-width: 657px){
        font-size: 1.5rem;
    }
    span {
        text-decoration: underline;
    }
`
export const AboutText = styled.span`
    font-size: 1.2rem;
    width: 25rem;
    margin: 1rem;
    @media (max-width: 657px){
        font-size: 0.8rem;
    }
    @media (max-width: 493px){
        width: 20rem;
    }
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

    @media (max-width: 657px){
        width: 7rem;
        font-size: 1rem;
    }
    @media (max-width: 493px){
        width: 4rem;
        font-size: 0.8rem;
    }
`
export const AboutTextDown = styled.span`
    width: 28rem;
    margin: 1rem;

    @media (max-width: 657px){
        font-size: 0.7rem;
    }
    @media (max-width: 493px){
        width: 18rem;
    }
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