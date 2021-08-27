import React, { useState } from 'react'
import { ContactContainer, 
    ContactInfosContainer, 
    ContactTitle, 
    ContainerEmailContact, 
    ContainerWhatsContact,
    EmailTextField,
    MessageTextField,
    NameTextField,
    SendMessage,
    WhatsCallContainer,
    WhatsImage,
    WhatsText} from './styles';
import WhatsLogo from '../../assets/whatsapp.png';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';


const Contact = () => {
    const [emailInput, setEmailInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_pr9wbnv', 'template_hj8k1ko', {
            name: nameInput,
            email: emailInput,
            message: messageInput
        }, 'user_cf8SiJrCNBLehEwH5sihB')
      .then((result) => {
          alert('Mensagem enviada com sucesso')
          setMessageInput('')
          setNameInput('')
          setEmailInput('')
      }, (error) => {
          alert(error.message);
      });
    }

    const useStyle = makeStyles(theme => ({
        root: {
            '& .MuiFormLabel-root': {
                color: '#fff'
            },
            '& .MuiInputBase-input': {
                color: '#fff'
            }
        }
        
    }))
    const classes = useStyle();

    return (
        <ContactContainer>
            <ContactTitle><span style={{textDecoration: 'underline'}}>E</span>ntre em contato conosco</ContactTitle>
            <ContactInfosContainer>
                <ContainerWhatsContact>
                    <h2>(47)98488-3371</h2>
                    <span>Need panfletagem ltda</span>
                    <span>contato@needpanfletagem.com.br</span>
                    <span>Blumenau - Santa Catarina</span>
                    <WhatsCallContainer>
                        <WhatsImage src={WhatsLogo} />
                        <a href='https://wa.me/5547984883371'><WhatsText>Chame agora</WhatsText></a>
                    </WhatsCallContainer>
                </ContainerWhatsContact>
                <ContainerEmailContact onSubmit={sendEmail} className={classes.root}>
                <NameTextField
                        name="name" 
                        required id="standard-basic" 
                        label="Digite seu Nome"
                        margin='dense'
                        fullWidth
                        variant='filled'
                        value={nameInput}
                        onChange={e => setNameInput(e.target.value)}
                        >
                    </NameTextField>
                    <EmailTextField
                        name="email" 
                        required id="standard-basic" 
                        label="Digite seu Email"
                        margin='none'
                        fullWidth
                        variant='filled'
                        value={emailInput}
                        onChange={e => setEmailInput(e.target.value)}
                    >
                    </EmailTextField>
                    <MessageTextField
                        name="message" 
                        id="outlined-multiline-static" 
                        multiline rows={4} 
                        label='Mensagem'
                        margin='normal'
                        fullWidth
                        variant='filled'
                        value={messageInput}
                        onChange={e => setMessageInput(e.target.value)}
                    >
                    </MessageTextField>
                    <SendMessage value='Enviar' type='submit' />
                </ContainerEmailContact>
            </ContactInfosContainer>
        </ContactContainer>
    )
}

export default Contact;
