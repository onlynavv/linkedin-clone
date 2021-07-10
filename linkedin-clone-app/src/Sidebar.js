import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'

const Sidebar = () => {

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
                <Avatar className='sidebar-avatar' />
                <h2>Naveen Kumar</h2>
                <h4>Frontend React Developer</h4>
            </div>
            <div className='sidebar-stats'>
                <div className="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className='sidebar-statNumber'>1,452</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className='sidebar-statNumber'>2,014</p>
                </div>
            </div>
            <div className='sidebar-bottom'>
                <p>Recent</p>
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
