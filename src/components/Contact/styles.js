import styled from "styled-components";
import TextField from '@material-ui/core/TextField'

export const ContactContainer = styled.div`
    height: 40rem;
    background-color: var(--dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    @media (max-width: 825px){
        height: 50rem;
    }
`
export const ContactTitle = styled.h1`
    color: #fff;
    margin: 1rem;
    
    @media (max-width: 511px){
        font-size: 1.5rem;
    }
    @media (max-width: 385px){
        font-size: 1rem;
    }
`
export const ContactInfosContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 30rem;
    width: 50rem;
    border: 5px double var(--primary);
    padding: 2rem 0 2rem 0;

    @media (max-width: 825px){
        flex-direction: column;
        align-items: center;
        width: 30rem;
        height: 40rem;
    }
    @media (max-width: 511px){
        width: 25rem;
        height: 40rem;
    }
    @media (max-width: 429px){
        width: 19rem;
    }
`
export const ContainerWhatsContact = styled.div`
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 2px solid var(--primary);

    @media (max-width: 825px){
        border-bottom: 2px solid var(--primary);
        border-right: none;
    }
    
    @media (max-width: 511px){
        width: 20rem;
    }

    @media (max-width: 511px){
        width: 15rem;
    }
    
    h2 {
        margin: 0.5rem;
        @media (max-width: 511px){
        font-size: 1rem;
        }
    }

    span {
        margin: 0.2rem;
        @media (max-width: 511px){
        font-size: 0.8rem;
        }
    }
`
export const WhatsCallContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: #fff;
    }
`
export const WhatsImage = styled.img`
    height: 3rem;
    margin: 1rem;
`
export const WhatsText = styled.div`
    width: 8rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    background-color: var(--primary);

    :hover {
        background-color: var(--grey);
    }
`
export const ContainerEmailContact = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 25rem;
    height: 30rem;
    padding: 2rem;

    @media (max-width: 511px){
        width: 19rem;
    }
`
export const NameTextField = styled(TextField)`
    color: #fff;
`
export const EmailTextField = styled(TextField)`

`
export const MessageTextField = styled(TextField)`
    
`
export const SendMessage = styled.input`
    color: #fff;
    margin: 0.2rem;
    background-color: #272622;
    padding: 0.2rem;
    width: 4rem;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 2rem;
    border-radius: 2px;
    &:hover {
        cursor: pointer;
        background-color: var(--primary);
        border: 1px solid #272622;
        color: #fff;
    }
`
