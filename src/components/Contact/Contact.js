import React from 'react'
import { ContactContainer, 
    ContactInfosContainer, 
    ContactTitle, 
    ContainerWhatsContact} from './styles';

const Contact = () => {
    return (
        <ContactContainer>
            <ContactTitle><span style={{textDecoration: 'underline'}}>E</span>ntre em contato conosco</ContactTitle>
            <ContactInfosContainer>
                <ContainerWhatsContact>
                    
                </ContainerWhatsContact>
            </ContactInfosContainer>
        </ContactContainer>
    )
}

export default Contact;
