import styled from "styled-components";
import TextField from '@material-ui/core/TextField'

export const ContactContainer = styled.div`
    height: 40rem;
    background-color: var(--dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
`
export const ContactTitle = styled.h1`
    color: #fff;
    margin: 1rem;
`
export const ContactInfosContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 30rem;
    width: 50rem;
    border: 5px double var(--primary) ;
    padding: 2rem 0 2rem 0;
`
export const ContainerWhatsContact = styled.div`
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 2px solid var(--primary);
    h2 {
        margin: 0.5rem;
    }

    span {
        margin: 0.2rem;
    }
`
export const WhatsCallContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

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
