
import {BookmarkIcon,PaperAirplaneIcon,ChatIcon,DotsHorizontalIcon,EmojiHappyIcon,HeartIcon} from '@heroicons/react/outline';
import {HeartIcon as HeartIconFilled} from '@heroicons/react/solid';

function Post({id,username,userImg,img,caption}){
return(
<div className='bg-white pb-2 my-7 border rounded-sm'>
<div className='flex items-center p-5'>
<img className='rounded-full h-12 w-12 object-contain border p-1 mr-3' src={userImg} alt='' />
<span className='flex-1 font-bold'>{username}</span>
<DotsHorizontalIcon className='h-5'/>
</div>
<img src={img} alt='' className='object-cover w-full'/>
<div className='flex justify-between pt-4 px-4'>
<div className='flex space-x-4'>
  <HeartIcon className='btn'/>
<ChatIcon className='btn'/>
<PaperAirplaneIcon className='btn'/>
</div>
<BookmarkIcon className='btn' />
</div>
<p className='p-5 truncate'>
<span className='font-bold mr-1'>{username}</span>
{caption}
</p>
<form className='flex items-center p-4'>
<EmojiHappyIcon  className='h-7'/>
<input type='text' placeholder='Add a comment' className='pl-2 border-none flex-1 focus:ring-0 outline-none'/>
<button className='font-semibold text-blue-400'>Post</button>
</form>
</div>
)
}
export default Post;