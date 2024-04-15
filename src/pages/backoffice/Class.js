import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Class = () => {
  const params = useParams();
  console.log(params)
  console.log(params.id)

    useEffect(()=>{
        const fetchClass = async ()=> {
          const response = await fetch(`http://localhost:3001/api/classes/${params.id}`  )
          const json = await response.json()
    
          if(response.ok){
            //store the data to students state in useReducer
            
            console.log('found', json)
          
          }
        }
        fetchClass();
      }, [])
      
  return (
    <div className='post-container'>
      <div className='post'>
        <h1>Subject</h1>
        <h3>BSIT-3D</h3>
      </div>
      <div className='post'>
        <div className="post-title">
          <h2>Activity 1</h2>
        </div>
        <div className="post-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum veritatis voluptatum voluptatem ipsa sed suscipit nostrum officiis voluptatibus optio, sapiente deserunt recusandae rem consectetur architecto aspernatur, similique autem cupiditate quam.</p>
        </div>
        <div className="post-footer">
          <p>Comments</p>
        </div>
      </div>
      <div className='post'>
        <div className="post-title">
          <h2>Activity 1</h2>
        </div>
        <div className="post-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum veritatis voluptatum voluptatem ipsa sed suscipit nostrum officiis voluptatibus optio, sapiente deserunt recusandae rem consectetur architecto aspernatur, similique autem cupiditate quam.</p>
        </div>
        <div className="post-footer">
          <p>Comments</p>
        </div>
      </div>
      <div className='post'>
        <div className="post-title">
          <h2>Activity 1</h2>
        </div>
        <div className="post-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum veritatis voluptatum voluptatem ipsa sed suscipit nostrum officiis voluptatibus optio, sapiente deserunt recusandae rem consectetur architecto aspernatur, similique autem cupiditate quam.</p>
        </div>
        <div className="post-footer">
          <p>Comments</p>
        </div>
      </div>
    </div>
  )
}

export default Class