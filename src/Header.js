import React from 'react';
import "./Header.css";
import logo from './pictures/cb1.jpg';
import SearchIcon from '@material-ui/icons/Pageview';
import FlagIcon from '@material-ui/icons/FlagRounded';
import HomeIcon from '@material-ui/icons/HouseRounded';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import {Avatar} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
    return(
        <div className="header">
        <div className="header__left">
        <img src={logo}  alt=""/>

        <div className="header__input">
            <SearchIcon/>
            <input type="text"/>
        </div>

        </div>
        <div classNAme="header__center">
<div className="header__option">
    <HomeIcon fontSize="large"/>
</div>




<div className="header__option">
    <FlagIcon fontSize="large"/>
        </div>
        </div>

        <div className="header__option">
    <SubscriptionsOutlinedIcon fontSize="large"/>
</div>


<div className="header__option">
    <StorefrontOutlinedIcon fontSize="large"/>
</div>

<div className="header__option">
    <SupervisedUserCircleRoundedIcon fontSize="large"/>
</div>

    <div className="header__right">
<div className="header__info">
    <Avatar/>
    <h4>kapsa</h4>
</div>
<iconButton>
    <AddIcon/>
</iconButton>

<iconButton>
    <ForumIcon/>
</iconButton>

<iconButton>
    <NotificationsActiveIcon/>
</iconButton>

<iconButton>
    <ExpandMoreIcon/>
</iconButton>





    </div>

        </div>
    );
}

export default Header;