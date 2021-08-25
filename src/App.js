import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/Home/Home";
import { AppContainer, WhatsContainer, WhatsIcon, WhatsText } from "./styles";
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Gallery from './screens/Gallery/Gallery';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import WhatsImage from './assets/whatsapp.png';

const App = () => {
  const [post, setPost] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get('instagram');
                console.log(res)
                setPost(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getPosts();
    }, [])
    console.log(post)

  return (
    <AppContainer >
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home post={post}/>        
        </Route>
        <Route path='/Galeria' >
          <Gallery />
        </Route>
        <Route path='/Sobre'>
          <AboutScreen />
        </Route>
        <Route path='/Contato'>
          <ContactScreen />
        </Route>
      </Switch>
      <WhatsContainer>
        <WhatsText>Fale Conosco</WhatsText>
        <WhatsIcon src={WhatsImage} />
      </WhatsContainer>
    </AppContainer>
  );
}

export default App;
