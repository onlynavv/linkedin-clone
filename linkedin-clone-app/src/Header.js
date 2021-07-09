import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import logo from './linkedin.png'
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-left">
                <img src={logo} alt='logo'></img>
                <div className='header-search'>
                    <SearchIcon />
                    <input type='text'></input>
                </div>
            </div>
            <div className="header-right">
                <HeaderOption title='Home' Icon={HomeIcon} />
                <HeaderOption title='Network' Icon={SupervisorAccountIcon} />
                <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
                <HeaderOption title='Messaging' Icon={ChatIcon} />
                <HeaderOption title='Notifications' Icon={NotificationsIcon} />
                <HeaderOption title='Me' avatar='https://pbs.twimg.com/profile_images/1334345810276831233/OFC8L8si_200x200.jpg' />
            </div>
        </div>
    )
}

export default Header
