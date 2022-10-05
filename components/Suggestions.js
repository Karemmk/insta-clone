function Suggestions(){
const suggestions = [
{
image : 'https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png',
id:1,
username: 'karem'
},
{
image : 'https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png',
id:2,
username: 'karem',
},
{
image : 'https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png',
id:3,
username: 'karem',
},
{
image : 'https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png',
id:3,
username: 'karem',
},
{
image : 'https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png',
id:3,
username: 'karem',
},
{
image : 'https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png',
id:3,
username: 'karem',
},
{
image : 'https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png',
id:3,
username: 'karem',
},
]
return(
<div className='mt-4 ml-10'>
 <div className='flex justify-between text-sm mb-5'>
   <h3 className='text-sm font-bold text-gray-400'>Suggestion for you</h3>
   <button className='text-gray-400 font-semibold'>See All</button>
 </div>
 {suggestions.map((profile)=>(
 <div key={profile.id} className='flex items-center justify-between mt-3'>
   <img className='w-10 h-10 rounded-full p-2' 
   src={profile.image} alt='' />
 <div className='flex-1 ml-4'>
   <h2 className='text-sm font-semibold'>{profile.username}</h2>
 </div>
 <button className='text-blue-400 text-sm '>Follow</button>
 </div>
 
 ))}
</div>
)
}
export default Suggestions;