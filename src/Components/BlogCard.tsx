import { Link } from 'react-router-dom'
import ReButton from './ReButton'

const BlogCard = ({title,image,_id}) => {
  return (
    <Link to={`/blog/${_id}`} className='relative group w-96 h-56 p-4 rounded-3xl bg-cover bg-center cursor-pointer m-4' style={{ backgroundImage: `url(${image})` }}>
        

        <div className='w-96 h-56 rounded-3xl absolute top-0 left-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100'>
          <div className=''>
            <ReButton text={"Read More"}/>
          </div>
        </div>
    </Link>
  )
}

export default BlogCard