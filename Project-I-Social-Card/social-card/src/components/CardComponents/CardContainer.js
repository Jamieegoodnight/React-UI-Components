import React from 'react';

import CardBanner from "./CardComponents/CardBanner.js";
import CardContent from "./CardComponents/CardContent.js";
import './Card.css';

function CardContainer(){
    return (
        <div>
            <CardBanner />
            <CardContent />
        </div>
    );
}

export default CardContainer;