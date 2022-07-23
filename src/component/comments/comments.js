import React , {useState} from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import './style.scss'
function Comments({comments, commentOnPost}) {
  const [open, setOpen] = useState(false);
  const [commentContent,setCommentContent]= useState('')
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e)=>{
    setCommentContent(e.target.value)
  } 
  const sendComment = (e)=>{
    e.preventDefault()
    commentOnPost({text:commentContent})
    setCommentContent("")
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxHeight:"70vh",
    overflowY:"scroll",
    overflowX:"hidden",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  return (
   <Grid container>
      <Button onClick={handleOpen}>Comments</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}> 
          <h2 className='comments_heading'>
            Comments
          </h2> 
      <Divider/>
          <Grid>
            {comments.map(item=>{
              console.log(item)
              return (
                item.text.length>0&&
                <Grid className='comment_content'>
                  <p className='comment_header'>
                    {item.name}
                  </p>
                  <p  className='comment_text'>
                    {item.text}
                  </p>
                </Grid>
              )    
            })}
          </Grid>
          <hr></hr>
          <Paper
            component="form"
            className='textField'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 380}}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                value={commentContent}
                onChange={handleChange}
                placeholder="Write a comment"
                inputProps={{ 'aria-label': 'write a comment' }}
              />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            <IconButton type="submit" color="primary" sx={{ p: '10px' }}
              disabled={commentContent.length<1}
            aria-label="directions"
              onClick={sendComment}
              >
              <SendIcon />
            </IconButton>

          </Paper>

        </Box>
      </Modal>
   </Grid>
  );
}

export default Comments;
