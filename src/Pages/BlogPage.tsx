import React, { useEffect, useState } from 'react'
import { data, Link, useParams } from 'react-router-dom'
import { hero, sample_blogs } from '../assets/assest';
import { IoArrowBackCircle } from "react-icons/io5";
import { BiLike, BiDislike , BiSolidDislike ,BiSolidLike} from "react-icons/bi";
import SmallFooter from '../Components/SmallFooter';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';


const BlogPage = () => {
    
    const {axios} = useAppContext()

    const {id} = useParams();
    

    const [blog,setBlog]= useState(null)
    const [reaction, setReaction]= useState(null)
    // getting blog data

    const getBlogByID = async ()=>{
        try {
            const {data} = await axios.get(`/api/blog/${id}`);
            
            if(data.success){
                setBlog(data.blog)
                if(data.upvote){}
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getVotedState = async ()=>{
        try {
            const {data} = await axios.get(`/api/blog/voted/${id}`);
            if(data.upvoted){
                setReaction('upvote')
            }
            else if(data.downvoted){
                setReaction('downvote')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    
    // make upvote 
    const makeUpVote = async(_id)=>{
        try {
            const {data} = await axios.post("/api/blog/upvote",{blogId:_id})

            if(data.success){
                setReaction('upvote')                
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // make downvote 

    const makeDownVote = async(_id)=>{
        try {
            const {data} = await axios.post("/api/blog/downvote",{blogId:_id})

            if(data.success ){
               setReaction("downvote")
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    


    useEffect(()=>{
        if(!id)return
        getBlogByID()
        getVotedState()

    },[])

    
    

    const upvoteHandle = (_id)=>{
        if(reaction == "upvote"){
            setReaction(null)
        }
        else{
            setReaction('upvote')
            makeUpVote(_id)
        }
    }
    const downvotehandle = (_id)=>{
        if(reaction == 'downvote'){
            setReaction(null)
        }
        else{
            setReaction('downvote')
            makeDownVote(_id)
        }
    } 

  return blog ? (
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
                <h1 className='poppins-bold text-3xl m-2'>{blog.title}</h1>
                <h4 className='poppins-light text-2xl text-gray-700'>{blog.category}</h4>
                <p>{blog.date}</p>

                <div className='w-full h-full flex items-center justify-center gap-3'>
                    <div className='text-center mx-4 my-2' onClick={()=>upvoteHandle(blog._id)}>
                        <div className='mx-3'>
                            {reaction=='upvote' ? <BiSolidLike className='text-3xl'/>:<BiLike className='text-3xl'/>}
                        </div>
                        
                        <p className='poppins-semibold'>UpVote</p>
                    </div>

                    <div className='text-center mx-4 my-2' onClick={()=>downvotehandle(blog._id)}>
                        <div className='mx-4'>{reaction=='downvote'? <BiSolidDislike className='text-3xl'/>:<BiDislike className='text-3xl'/>}</div>
                        <p className='poppins-semibold'>DownVote</p>
                    </div>
                </div>
            </div>
        </div>

        {/* image section  */}

        <div className='w-screen h-full flex items-center justify-center'>
            <img src={blog.image} alt="blog image" className='w-[400px] h-[250px] md:w-[500px] md:h-[300px] lg:w-[800px] lg:h-[500px]' />
        </div>

        {/* blog content  */}

        <div className='px-10 mt-10 md:px-24 lg:px-48 mb-10'>
            <div className='quill'>
                <div className='ql-editor' dangerouslySetInnerHTML={{__html:blog.content}}></div>
            </div>
        </div>
        <SmallFooter/>
    </div>
  ) :(<div>Loading...</div>)
}

export default BlogPage