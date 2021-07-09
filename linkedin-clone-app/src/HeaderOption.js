import React from 'react'
import './Header.css'
import {Avatar} from '@material-ui/core'

const HeaderOption = ({title,Icon,avatar}) => {
    return (
        <div className='header-option'>
            {Icon && <Icon className='headerOption-icon' />}
            {avatar && <Avatar className='headerOption-icon' src={avatar} />}
            <h4 className='headerOption-title'>{title}</h4>
        </div>
    )
}

export default HeaderOption
