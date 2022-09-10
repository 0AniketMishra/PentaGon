import React from 'react'
import {
    ArrowPathIcon,
    ArrowPathRoundedSquareIcon,
    Bars4Icon,
    BellIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    PlusIcon,
    UserGroupIcon,

} from '@heroicons/react/24/outline'


function Header() {
    return (
        <div className=" sticky top-0 bg-white">
            <div className="flex justify-between max-w-6xl  mx-5 lg:mx-auto ">
                <div className='relative h-12 w-24 cursor-pointer'>
                    <div className="flex items-center ">

                        <img src="https://th.bing.com/th/id/R.f61fd1b69a2437dc3dbaa340a235b3a7?rik=6GLgIB4iyAzAAw&riu=http%3a%2f%2fgetdrawings.com%2fvectors%2fwhite-instagram-logo-vector-12.png&ehk=NFrQK5IpTkyur%2bD%2bAXWCx93TmTYgJ35NWG2ecXtu8as%3d&risl=&pid=ImgRaw&r=0" alt="" className="w-10 mt-1 mt-2" />
                        <h1 className="text-xl text-center font-bold ml-2 hidden lg:inline-grid ">PentaGon</h1>
                    </div>
                </div>

                <div className="max-w-xl ">
                    <div className=" p-3 rounded-md flex h-14 items-center">
                        <div className='flex  space-x-2 bg-gray-100 p-2 rounded-full px-2  justify-center '>

                            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                            <input type="text" placeholder='Search-PenaGon' className='bg-transparent lg:w-80  w-46 outline-none  ' />
                        </div>
                    </div>
                </div>
                <div className="flex  items-center space-x-2 mr-4">
                    
                    <ArrowPathRoundedSquareIcon className="w-6 h-6 hover:scale-125   transition-all duration-150 ease-out" />
                    <PlusIcon className=' hidden md:inline-flex w-6 h-6 hover:scale-125 transition-all duration-150 ease-out' />
                    <BellIcon className='w-6 h-6 hover:scale-125 transition-all duration-150 ease-out' />
                    <UserGroupIcon className=" hidden md:inline-flex w-6 h-6 hover:scale-125 transition-all duration-150 ease-out" />
                    {/* <img src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg" alt="" className="w-10 h-10"/> */}
                </div>
            </div>
            <hr />
        </div>

    )
}

export default Header