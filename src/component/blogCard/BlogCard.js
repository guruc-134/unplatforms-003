import React, { useState,useEffect, useContext} from 'react'
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import {firestore} from '../../DataBase/firebase.config';
import {UserContext} from "../../Redux/context/user/userContext"
import Avatar from '@mui/material/Avatar';
import ReactDOM  from 'react-dom';
import './styles.scss'
import profile from  "../../assets/profile2.jpg"
import Comments from '../comments/comments';
import Paper from '@mui/material/Paper';
function BlogCard({blog}) {
    const [likes,setLikes] = useState(0);
    const [views,setViews] = useState(blog.views);
    const [didLike,setDidLike] = useState(false);
    const [comments,setComments] = useState([]);
    const user = useContext(UserContext)
    const openModal = ()=>{
    }
    const getLikes = ()=>{
    // useCallback(() =>{
        firestore.collection(`blogs/${blog.id}/likes`).get()
        .then(resp=>{
            var ss = new Set()  
            resp.docs.map(item=> ss.add(item.data().id))
            ReactDOM.unstable_batchedUpdates(() => {
                setDidLike(ss.has(user.email))
                setLikes(ss.size)
             })
        })
    }
    // },[ ])
    const addLike = ()=>{
    // useCallback(() =>{
        var ss = new Set()
        firestore.collection(`blogs/${blog.id}/likes`).get()
        .then(resp=>{
            resp.docs.forEach(item => {
                ss.add(item.data().id)
            })
        if(!ss.has(user.email))
            {
                firestore.collection(`blogs/${blog.id}/likes`).add({id:user.email})
                getLikes()  
            }
        }
        )}
    // },[])
    const fetchComments = ()=>{ 
        const arr = []
        firestore.collection(`/blogs/${blog.id}/comments`).get()
        .then(rr =>{
            rr.docs.forEach(item=>{
            arr.push(item.data())
          })
        })
        setComments(arr)
    }
    const commentOnPost = (item)=>{
        setComments(prev=>[...prev,{...item,id:user.uid,name:user.displayName}])
        firestore.collection(`/blogs/${blog.id}/comments`).add({...item,id:user.uid,name:user.displayName})
    }

    useEffect(()=>{
        fetchComments()
        getLikes()
        const increaseViewCount = ()=>{
            const curViews = blog.views ? blog.views + 1:1
            setViews(views=>views+1)
            firestore.doc(`/blogs/${blog.id}`).update({...blog,views:curViews})
        }
        increaseViewCount()
    },[]) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Paper className='BlogCard'>
    <Grid className='BlogCard_inner'>
        <Grid className='card_header'>
            <Grid className="card_header_left">
            <Avatar alt="Remy Sharp" src={profile} sx={{height:90 ,width:90}} />
            </Grid>
            <Grid className='card_header_right'>
                <p className='card_header_right_name' >
                    {blog.name}
                </p>
                <p className='card_header_right_tagline'>
                    {blog.tagline}
                </p>
            </Grid>
        </Grid>
        <Grid className='card_body'>
            <div>
                {blog.para1}
            </div>
            <div>
                {blog.para2}
            </div>
        </Grid>
        <Grid className='card_footer' >
            <Grid className='card_footer_values'>
                <span> {views} View </span>|
                <span style={{color:didLike&&"blue"}}> {likes}  Likes </span>|
                <span> {comments.length} Comments </span>|
                <span> 8 Shares </span>
            </Grid>
            <Grid className="card_footer_buttons">
                <Grid className='card_footer_buttons_btn'>
                    <Button onClick={addLike}>
                        Like
                    </Button>
                </Grid>
                <Grid className='card_footer_buttons_btn'>
                    <Comments comments={comments} commentOnPost={commentOnPost} fetchComments={fetchComments}/>
                </Grid>
                <Grid className='card_footer_buttons_btn'>
                    <Button onClick={openModal}>
                        Share
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </Paper>
  );
}

export default BlogCard;
