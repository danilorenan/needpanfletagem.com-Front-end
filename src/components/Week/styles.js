import styled from "styled-components";

export const WeekContainer = styled.div`
    height: 40rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary);
    
    @media (max-width: 613px){
        height: 30rem;
    }
    @media (max-width: 419px){
        height: 20rem;
    }  
    .center {
        width: 35rem;
        height: 25rem;
        display: flex;
        margin: 2rem;

        @media (max-width: 613px){
    }
    }
`

export const WeekTitle = styled.h1`
    margin-top: 1rem;
    color: #fff;
    @media (max-width: 613px){
        font-size: 1.5rem;
        margin-bottom: 0.1rem;
    }
`
export const WeekMore = styled.div`
    margin: 2rem;
    padding: 0.2rem;

    @media (max-width: 613px){
        margin: 0.5rem;
    }
    :hover {
        background-color: var(--dark);
    }
    
`
export const WeekItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const WeekItemImage = styled.img`
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 35rem;
    height: 25rem;

    @media (max-width: 613px){
        width: 25rem;
        height: 15rem;
    }
    @media (max-width: 419px){
        width: 20rem;
        height: 10rem;
    }    
`