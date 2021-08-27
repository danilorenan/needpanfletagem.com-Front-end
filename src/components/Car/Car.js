import React from 'react'
import { CarContainer, CarImage } from './styles';
import ImageCar from '../../assets/car.png';

const Car = () => {
    return (
        <CarContainer>
            <CarImage src={ImageCar} />
        </CarContainer>
    )
}

export default Car;