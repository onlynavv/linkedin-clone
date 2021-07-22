import React,{useState} from 'react'
import './PostModal.css'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Avatar } from '@material-ui/core';
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import { useGlobalContext } from './context';
import {db} from './firebase'
import firebase from 'firebase'
import ReactPlayer from 'react-player'
import {auth} from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const PostModal = () => {

    const {dispatch} = useGlobalContext()

    const [message,setMessage] = useState([])
    const [showPhotoPick,setShowPhotoPick] = useState(false)
    const [showVideoPick,setShowVideoPick] = useState(false)
    const [imagePick,setImagePick] = useState('')
    const [videoLink,setVideoLink] = useState('')

    const [user] = useAuthState(auth)

    const sendPost = (e) => {
        e.preventDefault();

        if(imagePick){
        const upload = firebase.storage().ref(`/images/${imagePick.name}`).put(imagePick)

        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,(snapshot)=>{
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('uploaded : '+  progress + ' %')
            if(snapshot.state === 'RUNNING'){
                console.log('upload running')
            }else if(snapshot.state === 'PAUSED'){
                console.log('upload paused')
            }
        },(error)=>{console.log(error.code)},
        async() => {
            const downloadURL = await upload.snapshot.ref.getDownloadURL()
            db.collection('posts').add({
            name:'Naveen',
            description:'testing',
            message: message,
            photoUrl:downloadURL,
            comments:0,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        }
        )
    }else if(videoLink){
            db.collection('posts').add({
            name:'Naveen',
            description:'testing',
            message: message,
            photoUrl:videoLink,
            comments:0,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

        setMessage('')
        setImagePick('')
        setVideoLink('')
        dispatch({type:'CLOSE_MODAL'})
    }

    const handleClose = () => {
        dispatch({type:'CLOSE_MODAL'})
        console.log('clicked')
    }

    const handleShowPhoto = () => {
        setShowPhotoPick(!showPhotoPick)
    }

    const handleShowVideo = () => {
        setShowVideoPick(!showVideoPick)
    }

    const handlePhotoPick = (e) => {
        e.preventDefault()
        const image = e.target.files[0];
        console.log(image)

        if(image === '' || image === undefined){
            alert(`This is not an image, the image is ${typeof image} `)
        }

        setImagePick(image)
    }

    return (
        <div className='postModal-container'>
            <div className='modal'>
                <div className='modal-header'>
                    <h4>Create a post</h4>
                    <div onClick={handleClose}>
                        <CloseOutlinedIcon />
                    </div>
                </div>
                <div className='modal-container'>
                <div className='modal-user'>
                    <div className='modal-userInfo'>
                        <Avatar />
                        <span>{user.displayName}</span>
                    </div>
                </div>

                <form>
                <div className='modal-editorContainer'>
                        <textarea placeholder='What do you want to talk about?' autoFocus={true} value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>

                {showPhotoPick && (
                    <div className='photoPick-container'>
                        <input type='file' accept='image/gif, image/jpeg, image/png' name='file' id='file' onChange={handlePhotoPick} style={{display:'none'}}></input>
                        <p>
                            <label for='file'>Click here to select an image to share</label>
                        </p>
                        {imagePick && <img src={URL.createObjectURL(imagePick)} alt='img-picked'></img> }
                    </div>
                )}

                {showVideoPick && (
                    <div className='photoPick-container'>
                        <input type='text' placeholdre='Enter video link here..' value={videoLink} onChange={(e)=>setVideoLink(e.target.value)}></input>
                        {videoLink && <ReactPlayer width='100%' url={videoLink} />}
                    </div>
                )}
                
                <div className='modal-contentAttach'>
                    <div className='contentAttach-container'>
                        <div className='content-attach' onClick={handleShowPhoto}>
                            <PhotoSizeSelectActualOutlinedIcon />
                        </div>
                        <div className='content-attach' onClick={handleShowVideo}>
                            <VideoLibraryOutlinedIcon />
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='modal-postBtn' onClick={sendPost}>Post</button>
                    </div>
                </div>
                </form>

                </div>
            </div>
        </div>
    )
}

export default PostModal
