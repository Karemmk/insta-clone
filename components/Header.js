import Image from 'next/image';
import {SearchIcon,PaperAirplaneIcon,MenuIcon,PlusCircleIcon,UserGroupIcon,HeartIcon} from '@heroicons/react/outline';
import {HomeIcon} from '@heroicons/react/solid';
import { signOut } from "next-auth/react";


function Header() {

return(
<div className='shadow-sm border-b bg-white sticky top-0 z-50'>
 <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
  <div className="relative mt-1 hidden lg:inline-grid  w-24 cursor-pointer">
   <img src='https://links.papareact.com/ocw' alt="" layout='fill' objectFit='contain' />
  </div>
  <div className="relative mt-2 lg:hidden   w-10 flex-shrink-0 cursor-pointer">
   <img src='https://links.papareact.com/jjm' alt="small" layout='fill' objectFit='contain' />
  </div>
  <div className="relative mt-1  rounded-md">
   <div className="absolute mt-3 pl-3 flex items-center pointer-events-none">
     <SearchIcon className='h-5 w-5'/>
   </div>
  <input className="flex pl-5 p-3 ml-3 bg-gray-50 sm:text-sm border-gray focus:ring-black focus:border-black rounded-md" type='text' placeholder='Search' />
  </div>
  <div className='flex items-center justify-end space-x-5 '>
    <MenuIcon className='flex h-10 w-10 md:hidden'/>
    <HomeIcon className='navBtn'/>
    
    
    <div className='relative navBtn'>
    <PaperAirplaneIcon className='navBtn'/>
    <div className='absolute text-xs h-5 w-5 justify-center -top-2 right-1 flex items-center bg-red-500 rounded-full text-white animate-pulse'>4</div>
    </div>
    <PlusCircleIcon className='navBtn' />
    <UserGroupIcon className='navBtn'/>
    <HeartIcon className='navBtn'/>
     <img 
     onClick={()=>signOut()}
     src="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png" alt='user image' className='h-10 rounded-full cursor-pointer' />
   
  </div>
 </div>
</div>
)
}
export default Header;