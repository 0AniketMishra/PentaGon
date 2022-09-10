import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

function Feed() {
  return (
    
   <main className='grid grid-cols-1   lg:grid-cols-4 lg:max-w-6xl mx-auto'> 
          {/* Stories  */}
          <section className="lg:col-span-3 md:col-span-6 ">
              {/* <h1 className="ml-8  mr-8 font-bold text-xl">#Stories</h1> */}
              <Stories />
        <Posts />
          </section>
          {/* Posts  */}
          <section className="hidden lg:inline-grid lg:cols-span-1">
            <div className="fixed top-20">
          <MiniProfile />
          <Suggestions />
            </div>
          
          </section>
   </main>
    
  )
}

export default Feed