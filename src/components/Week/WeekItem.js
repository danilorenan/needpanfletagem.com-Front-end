import React from 'react'
import { WeekItemContainer, WeekItemImage } from './styles';

const WeekItem = ({item}) => {
    console.log(item)
    return (
        <WeekItemContainer>
             <WeekItemImage src={item.url} />
        </WeekItemContainer>
    )
}

export default WeekItem;
