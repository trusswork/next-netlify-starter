import Image from "next/image"
import { MenuAlt2Icon } from "@heroicons/react/solid/"
import { signIn, signOut, useSession } from 'next-auth/client'

function Header({ toggle }) {

    const [session] = useSession();


    return (
        <nav className="sticky top-0 bg-primary" role="navigation">
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex justify-between items-center">
                    <a href="#">
                        <Image src="/Tiziki-logo.jpg"
                            height={50}
                            width={80}
                            objectFit="contain"
                            alt="" />
                    </a>
                    <div className="px-4 cursor-pointer md:hidden">
                        <MenuAlt2Icon className="text-white h-8" onClick={toggle} />
                    </div>
                    <div className="p-5 text-white space-x-3 cursor-pointer transition duration-100 md:block hidden">
                        <a className="py-3 px-5 hover:text-red-500 ">Premium</a> 
                        
                         <a onClick={signIn} className="py-3 px-5 hover:text-red-500 ">
                        {
                            session ? `Hello ${session.user.name}` : "Sign In"}</a> 
                         <a className="py-3 px-5 bg-red-500 rounded-md">Login</a>


                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header
