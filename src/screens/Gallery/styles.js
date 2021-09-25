import styled from "styled-components";

export const GalleryContainer = styled.div`
    width: 100%;
    background-color: var(--dark);
    padding: 2rem;
   position: relative;
`
export const GalleryTitle = styled.h1`
    color: #fff;
    margin: 2rem;
    text-align: center;

    @media (max-width: 413px){
        font-size: 1.5rem;
    }
`
export const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    border: 5px double var(--primary);
    padding: 1rem;

    @media (max-width: 413px){
        display: flex;
        flex-direction: column;
        
    }
`
export const GalleryItemContainer = styled.div`
    width: 100%;
    height: 0;
    overflow: hidden;
    padding: 50% 0;
    position: relative;
    opacity: 0.8;
`
export const GalleryImage = styled.img`
    min-width: 100%;
    min-width: 100%;
    max-width: 150%;
    position: absolute;
    top: 0;
    left: 0;

    @media (max-width: 413px){
        top: 30;
    }
`
export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
`
export const ModalImageSelect = styled.img`
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
    border: 3px solid #fff;
`