import React from 'react'
import { Avatar } from '@material-ui/core'
import './Post.css'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {auth} from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Post = ({name,description,message,photoUrl,comments,timestamp}) => {

    const[user] = useAuthState(auth)

    return (
        <div className='post'>
            <div className='post-header'>
                <div className='post-userInfo'>
                    <Avatar src={user.photoURL} />
                    <div className='post-info'>
                        <h4>{user.displayName}</h4>
                        <p>{user.email}</p>
                        <p>{new Date(timestamp?.toDate()).toDateString()} <span>{new Date(timestamp?.toDate()).toLocaleTimeString('en-US')}</span></p>
                    </div>
                </div>
                <MoreHorizIcon />
            </div>

            <div className="post-body">
                <p>{message}</p>
                <div className='postBody-image'>
                    {photoUrl && <img src={photoUrl} alt='shared-img'></img>}
                </div>
                <div className='social-counts'>
                    <button><img src='https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb' alt='reaction'></img><span>10</span></button>
                    <button>{comments} comments</button>
                </div>
            </div>

            <div className="post-buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
                <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
                <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
            </div>
        </div>
    )
}

export default Post
