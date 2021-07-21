import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'
import {auth} from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Sidebar = () => {

    const[user] = useAuthState(auth)

    const recent = (topic) => {
        return(
            <div className='sidebar-recentItem'>
                <span className='sidebar-hash'>#</span>
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img src='https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80' alt=''></img>
                <Avatar className='sidebar-avatar' src={user.photoURL} />
                <h2>Naveen Kumar</h2>
                <h4>Frontend React Developer</h4>
            </div>
            <div className='sidebar-stats'>
                <div className="sidebar-stat">
                    <p>Who viewed your profile</p>
                    <p className='sidebar-statNumber'>1,452</p>
                </div>
                <div className="sidebar-stat">
                    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',marginTop:'0'}} className="sidebar-stat">
                        <p>Connection</p>
                        <p style={{fontWeight:'800',color:'black'}}>Grow your network</p>
                    </div>
                    <p className='sidebar-statNumber'>2,014</p>
                </div>
            </div>
            <div className='sidebar-bottom'>
                <p>Hashtags</p>
                {recent('programming')}
                {recent('reactjs')}
                {recent('nodejs')}
                {recent('jobs')}
                {recent('design')}
            </div>
        </div>
    )
}

export default Sidebar
