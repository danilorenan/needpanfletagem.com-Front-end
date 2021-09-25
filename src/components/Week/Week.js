import React from 'react'
import { WeekContainer, WeekMore, WeekTitle } from './styles';
import Slider from 'react-slick';
import WeekItem from './WeekItem';
import { Link } from 'react-router-dom';

const Week = ({weekPost, WeekImage}) => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, 
                display: "none", 
                background: "red",
                width: '4rem'
             }}
            onClick={onClick}
          />
        );
      }

    const settings = {
        dots: false,
        fade: true,
        autoplay: true,
        width: 600,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'center',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />
    }

    return (
        <WeekContainer>
            <WeekTitle><span style={{textDecoration: 'underline'}}>D</span>estaque semanal</WeekTitle>
            <Slider {...settings}>
                
                    {weekPost?.map(item => {
                        return <WeekItem item={item} key={item.id} />
                    })}
               
            </Slider>
            <WeekMore>
                <Link style={{color: '#fff'}} to='/Galeria'>Mais na nossa galeria...</Link>
            </WeekMore>
        </WeekContainer>
    )
}

export default Week;
