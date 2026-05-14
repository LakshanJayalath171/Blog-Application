import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { hero, sample_blogs } from '../assets/assest';
import { IoArrowBackCircle } from "react-icons/io5";
import { BiLike, BiDislike , BiSolidDislike ,BiSolidLike} from "react-icons/bi";
import SmallFooter from '../Components/SmallFooter';

const BlogPage = () => {

    const {id} = useParams();
    console.log("use params val   "+id)

    const [data,setData]= useState(null)

    const fetchData = async()=>{
        const found = sample_blogs.find(items =>items._id.trim() === id)
        console.log(found)
        setData(found)
    }

    

    useEffect(()=>{
        if(!id)return
        fetchData()
    },[])

    const [reaction, setReaction]= useState(null)

    const upvoteHandle = ()=>{
        if(reaction == "upvote"){
            setReaction(null)
        }
        else{
            setReaction('upvote')
        }
    }
    const downvotehandle = ()=>{
        if(reaction == 'downvote'){
            setReaction(null)
        }
        else{
            setReaction('downvote')
        }
    } 

  return data ? (
    <div>
        {/* upper navbar section  */}
        <div className='mx-8 my-2'>
            <Link to={'/'}>
              <IoArrowBackCircle className='text-4xl cursor-pointer'/>
            </Link>
        </div>

        {/* blog title section  */}
        <div className='w-screen h-full flex items-center justify-center'>
            <div className='text-center'>
                <h1 className='poppins-bold text-3xl m-2'>{data.title}</h1>
                <h4 className='poppins-light text-2xl text-gray-700'>{data.category}</h4>
                <p>{data.date}</p>

                <div className='w-full h-full flex items-center justify-center gap-3'>
                    <div className='text-center mx-4 my-2' onClick={()=>upvoteHandle()}>
                        <div className='mx-3'>
                            {reaction=='upvote' ? <BiSolidLike className='text-3xl'/>:<BiLike className='text-3xl'/>}
                        </div>
                        
                        <p className='poppins-semibold'>UpVote</p>
                    </div>

                    <div className='text-center mx-4 my-2' onClick={()=>downvotehandle()}>
                        <div className='mx-4'>{reaction=='downvote'? <BiSolidDislike className='text-3xl'/>:<BiDislike className='text-3xl'/>}</div>
                        <p className='poppins-semibold'>DownVote</p>
                    </div>
                </div>
            </div>
        </div>

        {/* image section  */}

        <div className='w-screen h-full flex items-center justify-center'>
            <img src={data.image} alt="blog image" className='w-[800px]' />
        </div>

        {/* blog content  */}

        <div className='px-36 mt-10 mb-10'>
            <p className='poppins-light'>{data.content}</p>
        </div>
        <SmallFooter/>
    </div>
  ) :(<div>Loading...</div>)
}

export default BlogPage