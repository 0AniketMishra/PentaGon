import React from 'react'
import Stories from './Stories'

function Feed() {
  return (
    
   <main className='grid grid-cols-1  md:grid-cols-4   xl:grid-cols-4 xl:max-w-6xl mx-auto'> 
          {/* Stories  */}
          <section className="col-span-3">
              {/* <h1 className="ml-8  mr-8 font-bold text-xl">#Stories</h1> */}
              <Stories />
          </section>
          {/* Posts  */}
          <section></section>
   </main>
    
  )
}

export default Feed