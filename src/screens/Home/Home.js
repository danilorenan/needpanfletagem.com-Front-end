import React from 'react'
import { DestaqueContainer, DestaqueImage, HomeContainer } from './styles';
import ImageDestaque from '../../assets/needdestaque.jpg';
import Week from '../../components/Week/Week';
import Contact from '../../components/Contact/Contact';
import WeekImage from '../../api/WeekImages';

const Home = ({ weekPost }) => {
    return (
        <HomeContainer>
            <DestaqueContainer>
                <DestaqueImage src={ImageDestaque}/>
            </DestaqueContainer>
            <Week weekPost={weekPost} WeekImage={WeekImage}/>
            <Contact />
        </HomeContainer>
    )
}

export default Home;
