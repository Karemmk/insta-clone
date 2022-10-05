import Story from './Story';
import {useEffect,useState}from 'react';

function Stories() {
 const users = [
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
console.log(users);
return(
<div className='flex space-x-2 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll'>
{users.map((user,index) => (
<Story key={index} img={user.image} username={user.username} />
))}


</div>
)
}
export default Stories;