import { Box } from '@material-ui/core';
import Arrow from './Arrow';
import Hidden from '@material-ui/core/Hidden';
import React, { useState, useRef, useEffect } from 'react';
import CarouselItem from './CarouselItem';


function Carousel(props) {
    
    let restaurants = props.restaurants;
    let length = restaurants.length;
    const carouselRef = useRef(null);
    
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(null);
    
    //When getting to the last card, move to the first one
    const nextSlide = () => {
        const cards = carouselRef.current.children.length;
        
        setIndex(index === length - cards ? 0 : index + 1);
    }


    const prevSlide = () => {
        const cards = carouselRef.current.children.length;

        setIndex(index === 0 ? length - cards : index -1);
       
    }
    //After render, check the length of the visible cards and render arrows
    useEffect(() => {
            const node = carouselRef.current;
            const cards = node.children.length;
            return cards < length ? setVisible(true) : setVisible(false);
                
      }, [length]);


    
    return (
        <div style={{marginLeft:'3em', marginRight:'3em'}}>
            <h1 className="carousel-title">{props.title}</h1>

            <Box
                className="carousel-box"
                display="flex"
                justifyContent="beginning"
                m={1}
                p={1}>
                <Arrow direction="left" isVisible={visible} handleClick={prevSlide} />
                
                
                    <div ref={carouselRef}    >
                    <CarouselItem  content={restaurants[index]} >

                    </CarouselItem>
                    <Hidden smDown>
                    <CarouselItem content={restaurants[index+1]} >

                    </CarouselItem>
                    </Hidden>
                    <Hidden mdDown>
                    <CarouselItem content={restaurants[index+2]}>

                    </CarouselItem>
                    </Hidden>

                    </div>
                

                <Arrow direction="right" isVisible={visible} handleClick={nextSlide} />

            </Box>
        </div>
    );
}

export default Carousel;
