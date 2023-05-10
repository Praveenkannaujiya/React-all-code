import { FcLike } from "react-icons/fc";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'


const Postupdate = () => {

    const [posts, setPosts] = useState([])
   

    useEffect(() => {
        fetch('https://dummyjson.com/posts').then((result) => {
            result.json().then((response) => {

                setPosts(response.posts)
               
                console.log(posts)
            })
        })

    }, []);
console.log(posts)
    return (
   
        <>
        <h1>Posts</h1>
        <ul>
            {              
                posts.map((post) =>
      <div className='muidiv'>
      
      <CardContent>
        <div className='nbn'>
      <Typography sx={{ fontSize: 18 }} >
      {post.tags[0]} , {post.tags[1] } , {post.tags[2]}
      </Typography>
      </div>
      <Typography variant="h5" component="div">
      {post.title.substring(0,12)}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {post.userId}
      </Typography>
      <Typography variant="body2">
      {post.body.substring(0,140)}
      
      </Typography>
      <br></br>
      <Typography variant="h5" >
      <FcLike/> {post.reactions}  
      </Typography>
    </CardContent>
    
      </div>
      
                ) }
        </ul>
    </>
   
    );
}

export default Postupdate
 
              
{/* <Card border="dark" bg='primary' style={{ width: '16rem'  }}>
<Card.Title>{post.tags[0]} , {post.tags[1] } , {post.tags[2]}</Card.Title>
 <Card.Header>{post.userId}</Card.Header>
 <Card.Body>
   <Card.Title>{post.title.substring(0,15)}</Card.Title>
  
   <Card.Text>{showm? post.body : `${post.body.substring(0,90)}`+`.....`}
 
   
   </Card.Text>
   </Card.Body>
  */}
// </Card>

