import ReButton from './ReButton'

const BlogCard = ({title,image}) => {
  return (
    <div className='relative group w-96 h-56 p-4 rounded-3xl bg-cover bg-center cursor-pointer m-4' style={{ backgroundImage: `url(${image})` }}>
        <div className='absolute top-5/8 left-1/12 z-10'>
            <h4 className='poppins-bold text-blue-50 group-hover:opacity-0'>{title}</h4>
        </div>

        <div className='w-96 h-56 rounded-3xl absolute top-0 left-0 bg-black/60  flex items-center justify-center'>
          <div className='opacity-0 group-hover:opacity-100'>
            <ReButton text={"Read More"}/>
          </div>
        </div>
    </div>
  )
}

export default BlogCard