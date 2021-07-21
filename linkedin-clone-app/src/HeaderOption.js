import React from 'react'
import './Header.css'
import {Avatar} from '@material-ui/core'
import {auth} from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const HeaderOption = ({title,Icon,avatar,active,DownIcon,avatarDropdown,avatarClickHandle}) => {

    const[user] = useAuthState(auth)

    return (
        <div className={`header-option ${active ? 'active' : false}`} onClick={avatarClickHandle}>
            {Icon && <Icon className='headerOption-icon' />}
            {avatar && <Avatar className='headerOption-icon' src={avatar} />}
            <div className={'headerOption-dropDownContainer'}>
                <h4 className='headerOption-title'>{title}</h4>
                {DownIcon && <DownIcon />}
                {avatarDropdown && (
                    <div className='signout'>
                        <div className='signout-userInfo'>
                            <Avatar src={avatar} />
                            <div className='userDetails'>
                                <h5>{user.displayName}</h5>
                                <h6>{user.email}</h6>
                            </div>
                        </div>
                        <div className='signout-option' onClick={()=>auth.signOut()}>
                            <p>Signout</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeaderOption
