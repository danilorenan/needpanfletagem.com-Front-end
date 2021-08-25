import React from 'react'
import InstagramItem from './InstagramItem';
import { InstagramContainer, InstagramMore, InstagramTitle } from './styles';


const Instagram = ({post}) => {
    return (
        <InstagramContainer>
            <InstagramTitle><span style={{textDecoration: 'underline'}}>N</span>ossas novidades no instagram</InstagramTitle>
            {post.map((posts) => (
                <InstagramItem post={posts} key={posts.id}/>
            ))}
            <InstagramMore><a>Mais...</a></InstagramMore>
        </InstagramContainer>
    )
}

export default Instagram;
