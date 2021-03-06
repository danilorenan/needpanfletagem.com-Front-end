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
import Footer from './components/Footer/Footer';


const App = () => {
  const [post, setPost] = useState()
  const [weekPost, setWeekPost] = useState()

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get('posts');
                const resWeek = await axios.get('weekposts')
                console.log(res)
                setPost(res.data)
                setWeekPost(resWeek.data)
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
          <Home weekPost={weekPost}/>        
        </Route>
        <Route path='/Galeria' >
          <Gallery post={post}/>
        </Route>
        <Route path='/Sobre'>
          <AboutScreen />
        </Route>
        <Route path='/Contato'>
          <ContactScreen />
        </Route>
      </Switch>
      <WhatsContainer>
        <a href='https://wa.me/5547984883371'><WhatsText>Fale Conosco</WhatsText></a>
        <a href='https://wa.me/5547984883371'><WhatsIcon src={WhatsImage} /></a>
      </WhatsContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
