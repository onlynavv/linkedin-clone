import React,{useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import logo from './linkedin.png'
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {auth} from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Header = () => {

    const [avatarDropdown,setAvatarDropdown] = useState(false)

    const[user] = useAuthState(auth)

    const avatarClickHandle = () => {
        setAvatarDropdown(!avatarDropdown)
        console.log(avatarDropdown)
    }

    return (
        <div className='header'>
            <div className="header-left">
                <img src={logo} alt='logo'></img>
                <div className='header-search'>
                    <SearchIcon />
                    <input type='text' placeholder='Search'></input>
                </div>
            </div>
            <div className="header-right">
                <HeaderOption active={true} title='Home' Icon={HomeIcon} />
                <HeaderOption title='Network' Icon={SupervisorAccountIcon} />
                <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
                <HeaderOption title='Messaging' Icon={ChatIcon} />
                <HeaderOption title='Notifications' Icon={NotificationsIcon} />
                <HeaderOption title='Me' avatarClickHandle={avatarClickHandle} avatar={user.photoURL} avatarDropdown={avatarDropdown} DownIcon={ArrowDropDownIcon} />
                <HeaderOption title='Work' Icon={AppsIcon} />
            </div>
        </div>
    )
}

export default Header
