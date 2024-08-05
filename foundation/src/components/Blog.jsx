import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

export default function Blog() {

  const {loading, posts} = useContext(AppContext);
  return (
    <div className='mt-[66px]'>
      {
        loading ? (
         <div className='flex justify-center '>
          <p className='text-center'>
          <Spinner />

          </p>
         </div>

        ) : (
          posts.length === 0 ? (
            <div>
              <p>No Data Found</p>
            </div>
          ) : (
            <div>
              {posts.map((post) => (
                <div key={post.id}>
                  <p className='text-xl font-bold'>{post.title}</p>
                  <p>
                  By <span>{post.author}</span> on <span>{post.category}</span>
                  </p>
                  Posted on<span>{post.date}</span>
                  <p>{post.content}</p>
                  <div>{ post.tags.map((tag, index) => (
                    <div key={index} className='text-blue-500 underline'>
                      <span>{`#${tag}`}</span>
                    </div>
                  ))}</div>
                </div>
              ))}
            </div>
          )
        )
      }
    </div>
  )
}
