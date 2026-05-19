import { Link } from 'react-router-dom'
import ReButton from './ReButton'

const BlogCard = ({title,image,_id}) => {
  return (
    <Link to={`/blog/${_id}`} className='relative group w-46 h-24 p-4 rounded-3xl bg-cover bg-center cursor-pointer m-4 md:w-74 md:h-42  lg:w-96 lg:h-64' style={{ backgroundImage: `url(${image})` }}>
        

        <div className='hidden md:w-72 md:h-40 lg:w-96 lg:h-64 rounded-3xl absolute top-0 left-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100'>
          <div className=''>
            <ReButton text={"Read More"}/>
          </div>
        </div>
    </Link>
  )
}

export default BlogCard