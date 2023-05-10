
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'

const Post = () => {

    const [posts, setPosts] = useState([])
    const [showm,setShowM]=useState(false)
   

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
                <div className='cardpost'>
                    
       <Card border="dark" bg='primary' style={{ width: '16rem'  }}>
       <Card.Title>{post.tags[0]} , {post.tags[1] } , {post.tags[2]}</Card.Title>
        <Card.Header>{post.userId}</Card.Header>
        <Card.Body>
          <Card.Title>{post.title.substring(0,15)}</Card.Title>
         
          <Card.Text>{showm? post.body : `${post.body.substring(0,90)}`+`.....`}
        
          <button size="small"  onClick={()=>setShowM(!showm)}> {showm?"Read less":"Read more"}  </button>
          </Card.Text>
          </Card.Body>
        
      </Card>
      </div>
      
                ) }
        </ul>
    </>
   
    );
}

export default Post

