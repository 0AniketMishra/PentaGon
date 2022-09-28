import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

function Sidebar() {

    const [user] = useAuthState(auth);

    return (
        <div className="hidden ml-8 lg:inline-flex w-56 ">
            <div className=" rounded-2xl overflow-hidden border bg-white ">
                <img src="https://i.imgur.com/dYcYQ7E.png" className="" />
                <div className="flex ml-4 -mt-8">
                    <img src={user.photoURL} className="rounded-full -mt-0.1 w-20 p-1 border bg-white h-20" />
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
    )
}

export default Sidebar