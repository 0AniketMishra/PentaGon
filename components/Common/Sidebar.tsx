import { SparklesIcon } from "@heroicons/react/24/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

function Sidebar() {

    const [user] = useAuthState(auth);

    return (
        <div>
            <div className=" ml-6 xl:ml-16 w-60">
                <div className=" rounded-2xl overflow-hidden bg-white ">
                    <img src="https://i.imgur.com/dYcYQ7E.png" className="" />
                    <div className="flex ml-4 -mt-8">
                        <img src={user.photoURL} className="rounded-full -mt-0.1 w-16 p-[2px] border bg-white h-16" />
                    </div>
                    <div className="px-3 pb-6 pt-2 ml-4">
                        <h3 className="text-black text-sm bold font-bold">{user.displayName}</h3>
                        <p className="mt-2 font-sans font-light text-black">Hello, I am from another the other side!</p>
                    </div>
                    <div className="flex justify-center pb-3 text-black font-bold text-sm">
                        <div className="text-center mr-3 border-r pr-3 flex space-x-1 ">
                            <h2>34</h2>
                            <span >Followers</span>
                        </div>
                        <div className="text-center flex space-x-1">
                            <h2>42</h2>
                            <span>Following</span>
                        </div>
                    </div>
                </div>


            </div>

            <div className="xl:ml-16 bg-white mt-8 ml-6 w-60 rounded-xl p-2  ">
                <div className="flex">
                    <h1 className="font-bold text-lg ml-2">Explore</h1>
                    <h1 className="flex-1"></h1>
                    <SparklesIcon className="w-6 mr-2"/>
                </div>
                <div className=" mt-4 p-2">
                    <h1 className="font-bold bg-gray-100 hover:text-blue-500 cursor-pointer p-1 w-fit 00 mt-3 rounded-lg pl-2 pr-2">#embedded</h1>
                    <h1 className="font-bold bg-gray-100 hover:text-blue-500 cursor-pointer p-1 w-fit 00 mt-3 rounded-lg pl-2 pr-2">#boycott</h1>
                    <h1 className="font-bold bg-gray-100 hover:text-blue-500 cursor-pointer p-1 w-fit 00 mt-3 rounded-lg pl-2 pr-2">#fun</h1>
                    <h1 className="font-bold bg-gray-100 hover:text-blue-500 cursor-pointer p-1 w-fit 00 mt-3 rounded-lg pl-2 pr-2">#money</h1>
                </div>
            </div>
        </div>
    )
}

export default Sidebar