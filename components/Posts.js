import Post from './Post'

function Posts(){
const posts = [
{
image:'https://res.cloudinary.com/dyx1jeydm/image/upload/v1664738729/itgefbx2zi60gzlm7nfy.png',
id:1,
username: 'karem',
userImg:'https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png',
caption:'e-commerce app'
},
{
image:'https://res.cloudinary.com/dyx1jeydm/image/upload/v1664736814/auaykzij7ebxlfqcm2fu.png',
id:2,
username: 'karem',
userImg:'https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png',
caption:'My portfolio'
},
{
image:'https://res.cloudinary.com/dyx1jeydm/image/upload/v1664740221/jlujnqqaxnjebj7osiac.png',
id:3,
username: 'karem',
userImg:'https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png',
caption:'resto app'
},
]
return(
<div>
{posts.map((post)=>(
<Post key={post.id} 
id={post.id} 
img={post.image} userImg={post.userImg}
username={post.username}
 caption={post.caption}/>
))}

</div>
)
}
export default Posts;