import React from 'react'
import { ModalContainer, ModalImageSelect } from './styles';

const ModalImage = ({ imageSelect, setImageSelect }) => {
    const handleClick = (e) => {
        setImageSelect(null)
    }

    return (
        <ModalContainer onClick={handleClick}>
            <ModalImageSelect src={imageSelect} />
        </ModalContainer>
    )
}

export default ModalImage;
