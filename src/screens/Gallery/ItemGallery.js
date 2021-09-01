import React, { useState } from 'react'
import { GalleryImage, GalleryItemContainer } from './styles';

const ItemGallery = ({ item, setImageSelect }) => {

    return (
        <GalleryItemContainer>
            <GalleryImage onClick={() => setImageSelect(item.url)} src={item.url} alt={item.name}/>
        </GalleryItemContainer>
    )
}

export default ItemGallery;
