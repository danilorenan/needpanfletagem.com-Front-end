import React, { useState } from 'react'
import { GalleryContainer, GalleryGrid, GalleryTitle } from './styles';
import ItemGallery from './ItemGallery';
import ModalImage from './ModalImage';

const Gallery = ({post}) => {
    const [imageSelect, setImageSelect] = useState(null);
    return (
        <GalleryContainer>
            <GalleryTitle><span style={{textDecoration: 'underline'}}>N</span>ossa galeria de imagens</GalleryTitle>
            <GalleryGrid>
                {post?.map(item => {
                    return <ItemGallery setImageSelect={setImageSelect} item={item} key={item.id} />
                })}
            </GalleryGrid>
            {imageSelect && <ModalImage setImageSelect={setImageSelect} imageSelect={imageSelect} />}           
        </GalleryContainer>
    )
}

export default Gallery;
