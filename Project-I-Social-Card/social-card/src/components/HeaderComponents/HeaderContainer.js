import React from 'react';

import ImageThumbnail from "./HeaderComponents/ImageThumbnail";
import HeaderTitle from "./HeaderComponents/HeaderTitle.js";
import HeaderContent from "./HeaderComponents/Content.js";
import './Header.css';

function HeaderContainer(){
    return (
        <div>   
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </div>
    );
}

export default HeaderContainer;