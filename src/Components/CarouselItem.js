import { Blurhash } from "react-blurhash";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



function CarouselItem(props) {
    
    let restaurant = props;
    let isOnline = restaurant.content.online ? 'Online' : 'Offline';

    if(restaurant.content){
        return (

            <Card  style={{position:'relative'}} key={props.id}> 
                <CardActionArea>
                    <CardMedia>
                    <Blurhash
                        hash={restaurant.content.blurhash}
                        style={{height:'250px'}}
                        className="d-block w-100"
                        alt="First slide"
                    >
                        </Blurhash>
                        <Typography className="card-overlay" gutterBottom variant="h4" component="h4">
                        {restaurant.content.name}
                        </Typography>
                       
                    </CardMedia>
               
                    
                    <CardContent>
                    
                    <Typography gutterBottom variant="h5" component="h2">
                         
                        {isOnline}
                        </Typography>
    
                    </CardContent>
                </CardActionArea>
            </Card>
            
        );
    } 
   
}

export default CarouselItem;
