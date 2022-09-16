import React, { useState, useEffect } from 'react'
import { Router, useMatch } from '@reach/router'
/* This example requires Tailwind CSS v2.0+ */


  export default function Example(props) {
    const [post, setPost] = useState(props.post)
    const Posts = () => ( <>
      {post.map((post) => (
        <div key={post.title} className="bg-secondary flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img alt={post.alt} className="h-100  w-full object-cover" src={post.imageUrl} width="400px" height="300px" />
          </div>
          <div className=" bg-white pb-6  flex flex-col justify-between">
            <div className="flex-1 bg-secondary ">
              <p className="text-sm mx-6 pt-6 font-medium text-gray-700">
                <a href={post.category.href} className="hover:underline">
                  {post.category.name}
                </a>
              </p>
              <a href={post.href} className="block mx-6 mt-2">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-700">{post.description}</p>
              </a>
            </div>

          </div>
        </div>
      ))}
      </>
    )

    return (
      <div >

        <div className="relative mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900">Paige's Blog</h2>


          </div>



          <div className="mt-12 mx-auto lg:max-w-no w-full">
          <Posts  />
          </div>
        </div>
      </div>
    )
  }
