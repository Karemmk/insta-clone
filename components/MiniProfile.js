function MiniProfile() {
return (
<div className='flex items-center justify-between mt-14 ml-10'>
 <img className='w-16 h-16 rounded-full border p-[2px]'
 src='https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png' alt='' />
 <div className='flex-1 mx-4'>
 <h2 className='font-bold'>karemmk</h2>
 <h3 className='text-sm text-gray-400'>welcome to Instagram</h3>
 </div>
 <button className='text-blue-400 font-semibold'>Sign Out</button>
</div>
)
}
export default MiniProfile;