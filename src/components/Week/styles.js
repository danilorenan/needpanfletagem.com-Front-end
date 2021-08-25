import styled from "styled-components";

export const WeekContainer = styled.div`
    height: 40rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primary);

    .center {
        background-color: red;
        width: 35rem;
        height: 25rem;
        display: flex;
        margin: 2rem;
    }
`

export const WeekTitle = styled.h1`
    margin: 1rem;
    color: #fff;
`
export const WeekMore = styled.div`
    margin: 2rem;
    padding: 0.2rem;
    :hover {
        background-color: var(--dark);
    }
`
export const WeekItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35rem;
    height: 25rem;
`
export const WeekItemImage = styled.img`
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 35rem;
    height: 25rem;
`