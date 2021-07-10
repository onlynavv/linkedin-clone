import React,{useState,useEffect} from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post'
import {db} from './firebase'
import firebase from 'firebase'

const Feed = () => {

    const [posts,setPosts] = useState([])
    const [message,setMessage] = useState([])

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc)=>{
                return(
                    {
                        id:doc.id,
                        data:doc.data()
                    }
                )
            }))
        })
    },[])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name:'Naveen',
            description:'testing',
            message: message,
            photoUrl:'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setMessage('')
    }

    return (
        <div className='feed'>
            <div className="feed-inputContainer">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input type='text' value={message} onChange={(e)=>setMessage(e.target.value)}></input>
                        <button type='submit' onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className='feed-inputOptions'>
                    <InputOption title='Photo' Icon={ImageIcon} color='#7005f9' />
                    <InputOption title='Videos' Icon={SubscriptionsIcon} color='#e7a33e' />
                    <InputOption title='Event' Icon={EventNoteIcon} color='#c0cbcd' />
                    <InputOption title='Write Article' Icon={CalendarViewDayIcon} color='#7fc15e' />
                </div>
            </div>

            <div className=''>
                {posts.map(({id,data:{name,description,message,timestamp,photoUrl}})=>{
                    return(
                        <Post key={id} name={name} description={description} message={message} />
                    )
                })}
            </div>
        </div>
    )
}

export default Feed
