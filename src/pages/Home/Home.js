import React, {useEffect, useState} from 'react';
import BlogCard from '../../component/blogCard/BlogCard';
import Grid from '@mui/material/Grid';
import {firestore, firebase} from "../../DataBase/firebase.config"
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import  './styles.scss'
// import axios from "axios"
function Home() {
  console.log("home called")
  const [blogs,setBlogs] = useState([]);
  const logout = ()=>{
    firebase.auth().signOut()
  }
    const getBlogs = ()=>{
      firestore.collection('/blogs').get()
      .then(resp=>{
        const arr = []
        resp.docs.forEach(item=>
          {
            arr.push({...item.data(),id:item.id})
          })
        setBlogs(arr)
      })
    }
  useEffect(() => {
    getBlogs()
  },[]);
  return (
    <Grid>
        <div className='logout'>
          <Button onClick={logout}>
            <ExitToAppIcon style={{fontSize:"40px", color:"#5959CA"}}/>
          </Button>
        </div>
        <Grid container className='cards-container'>
            {blogs.map(blog=>{
                return (
                <BlogCard blog={blog} id={blog.id} key={blog.id } commentsCount={blog.commentsCount}/>
                )
                })}
        </Grid>
    </Grid>
  );
}

export default Home;
