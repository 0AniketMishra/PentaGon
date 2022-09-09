import React from 'react'
import { ArrowsRightLeftIcon, ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon} from '@heroicons/react/24/outline'
import { LikeButton } from '@lyket/react'

function Post() {
  return (
    <div className="ml-4 mr-4  p-2 rounded-lg items-center border border-gray-200">

      <div className="flex border-b items-center ">
        <div className="flex  items-center ">
          <div className="flex  items-center ">
            <img src="https://lh3.googleusercontent.com/a-/AFdZucqIzaspPhKsj-lKIF-KPwINypZ9ESrPY6_Kpo1JiA=s96-c" alt="" className="w-12 h-12 rounded-full p-1 border mb-2" />
            <h1 className="font-bold ml-2 ">Shreya Mishra</h1>
            <img src="https://th.bing.com/th/id/R.9c88df48e24182943ba4945b92aa3704?rik=ng8QDZfIeaOAvg&riu=http%3a%2f%2fclipart-library.com%2fimages%2fgTeEegLRc.png&ehk=rFKFF6hVaGBnpA8yieOD6YZvrGTf6%2fiafNKrPlbD7a8%3d&risl=&pid=ImgRaw&r=0" className='w-4 ml-2 h-4' alt="" />
         </div>
            
          <EllipsisVerticalIcon className="h-5 "/>
 
           
     
           </div>

        
        
        
       
      </div>
      <div className="ml-4 mt-2 md:mr-4 ">
        <h1 className="lg:w-[90%] mb-4">Hello Everybody! I like to introduce all of you to my new creataion its called the pentagon its a social media application which would allow everybody amoong overselves to connect</h1>
        <img src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2019/05/13/discord-has-amassed-over-250-million-users-in-four-years_feature.jpg" alt=""  className='w-96 rounded-lg '/>
      </div>

      <div className=" mt-2 flex space-x-8 ml-6">
        <HeartIcon className='h-6'/>
        <ChatBubbleOvalLeftEllipsisIcon className='h-6'/>
        <ArrowsRightLeftIcon className='h-6'/>
        <ShareIcon className='h-6'/>
      </div>
     </div>
  )
}

export default Post