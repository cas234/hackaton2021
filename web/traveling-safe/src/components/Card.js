
import React from 'react';

import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';


const Cards = (props) => {
    
  return (
      <div>
        
      
   <CardDeck>
   
<Card >
          <CardImg top width="100%" src="" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5"></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        
     </CardDeck>
     

           
        
   
          
          
    
    </div>
  );
};

export default Cards;