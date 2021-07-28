import React,{useState,useEffect} from 'react'
import './Feed.css'
// import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { Avatar } from '@material-ui/core';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post'
import {db} from './firebase'
// import firebase from 'firebase'
import PostModal from './PostModal';
import { useGlobalContext } from './context';
import {auth} from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Feed = () => {

    const {showModal,dispatch} = useGlobalContext()

    const [posts,setPosts] = useState([])
    const [message,setMessage] = useState([])

    const[user] = useAuthState(auth)

    const handleModalOpen = () => {
        dispatch({type:'OPEN_MODAL'})
        console.log('clicked')
    }

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

    // const sendPost = (e) => {
    //     e.preventDefault();

    //     db.collection('posts').add({
    //         name:'Naveen',
    //         description:'testing',
    //         message: message,
    //         photoUrl:'',
    //         timestamp: firebase.firestore.FieldValue.serverTimestamp()
    //     })

    //     setMessage('')
    // }

    return (
        <div className='feed'>
            <div className="feed-inputContainer">
                <div className='feed-inputBox'>
                    <Avatar src={user.photoURL} />
                    <div className="feed-input" onClick={handleModalOpen}>
                        <form>
                            <input type='text' placeholder='Start a post' value={message} onChange={(e)=>setMessage(e.target.value)}></input>
                            {/* <button type='submit' onClick={sendPost}>Send</button> */}
                        </form>
                    </div>
                </div>
                <div className='feed-inputOptions'>
                    <InputOption title='Photo' Icon={ImageIcon} color='#70b5f9' />
                    <InputOption title='Videos' Icon={SubscriptionsIcon} color='#7fc15e' />
                    <InputOption title='Event' Icon={EventNoteIcon} color='#e7a33e' />
                    <InputOption title='Write Article' Icon={CalendarViewDayIcon} color='#fc9295' />
                </div>
                {showModal && <PostModal />}
            </div>

            <div className=''>
                {posts.map(({id,data:{userName,userImage,userEmail,message,timestamp,photoUrl,comments}})=>{
                    // console.log(id)
                    return(
                        <Post key={id} userName={userName} userEmail={userEmail} userImage={userImage} message={message} photoUrl={photoUrl} docId={id} comments={comments} timestamp={timestamp} />
                    )
                })}
            </div>
        </div>
    )
}

export default Feed
