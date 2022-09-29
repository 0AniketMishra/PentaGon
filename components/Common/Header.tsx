import React from 'react'
import { ArrowPathIcon, ArrowPathRoundedSquareIcon, Bars4Icon, BellIcon, HomeIcon, MagnifyingGlassIcon, PlusIcon, UserGroupIcon,} from '@heroicons/react/24/outline'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { modalState } from '../../atoms/modalAtom';
import { useRecoilState } from 'recoil';
import Link from 'next/link'

function Header() {

    const [user] = useAuthState(auth);
    const [Open, setOpen] = useRecoilState(modalState)

    return (
    <div className=" sticky top-0 bg-white z-40">
        <div className="flex justify-between max-w-7xl  mx-5 lg:mx-auto ">
            <div className='relative h-12 w-24 cursor-pointer'>
                <div className="flex items-center lg:ml-6">
                    <img onClick={() => auth.signOut()} src={user.photoURL} alt="" className=" ml-2 w-10 h-10 mt-2 rounded-full " />
                        <h1 className="text-xs text-center font-bold ml-2 hidden lg:inline-grid  mt-2">{user.displayName}</h1>
                    </div>
                </div>

                <div className="max-w-xl ">
                    <div className=" p-3 rounded-md flex h-14 items-center">
                        <div className=' hidden lg:inline-flex space-x-2 bg-gray-100 p-2 rounded-full px-2  justify-center '>
                            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                            <input type="text" placeholder='Search-PenaGon' className='bg-transparent lg:w-80  w-36 outline-none  ' />
                        </div>
                    </div>
                </div>
                <div className="flex  items-center space-x-2 lg:mr-6"> 
                    <PlusIcon onClick={() => setOpen(true)} className='  w-6 h-6 hover:scale-125 transition-all duration-150 ease-out' />
                    <Link href="/" >
                        <a className="flex items-center">
                            <HomeIcon className='  w-6 h-6 hover:scale-125 transition-all duration-150 ease-out' />
                        </a>
                    </Link>
                    <Link href="/chats" >
                        <a className="flex items-center    hover:scale-125 transition-all duration-150 ease-out max-w-fit p-2  group relative text-black before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:text-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                            <UserGroupIcon className=" w-6 h-6 " />
                        </a>
                    </Link>
                </div>
            </div>
            <hr />
        </div>

    )
}

export default Header