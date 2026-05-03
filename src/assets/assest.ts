// importing images for categories

import cyberSecurity from "../assets/Cyber Security.jpeg"
import linux from "../assets/Linux.jpeg"
import rodmaps from "../assets/Roadmaps.jpeg"
import techNews from "../assets/Tech news.jpeg"
import webdevelopment from "../assets/Web development.jpeg"
import ai from "../assets/Ai.jpeg"

export {cyberSecurity}

// blog categories 

export const blogCategories = [
    {
        id:1,
        name:"Web Development",
        image:webdevelopment,
        blogs:10   
    },
    {
        id:2,
        name:"Cyber Security",
        image:cyberSecurity,
        blogs:12
    },
    {
        id:3,
        name:"Linux",
        image:linux,
        blogs:20
    },
    {
        id:4,
        name:"Roadmaps",
        image:rodmaps,
        blogs:22
    },
    {
        id:5,
        name:"Tech News",
        image:techNews,
        blogs:8
    },
    {
        id:6,
        name:"AI and Machine Learning",
        image:ai,
        blogs:12
    }
]

// importing images 

import hero from "../assets/hero.png"
import logo from "../assets/logo.png"
import phone from "../assets/White and Blue Clean Phone Notification Facebook Story-Photoroom.png"
import uploadImg from "../assets/upload.jpg"

export {hero,logo,phone,uploadImg}

// sample blog section 

import blog_ai from "../assets/blog ai.jpeg"
import blog_cs from "../assets/blog cs.jpeg"
import blog_linux from "../assets/blog linux.jpeg"
import blog_news from "../assets/blog news.jpeg"
import blog_roadmap from "../assets/blog roadmap.jpeg"
import blog_web_dev from "../assets/blog web dev.jpeg"

export const sample_blogs = [
    {
        _id:"64f1a9c2b8e4d3a1f0c9b123",
        category:"Web development",
        image:blog_web_dev,
        title:"Building Modern Web Apps with React and Tailwind CSS",
        content:"Deploying a web application is a crucial step in development. It allows your project to be accessible to users around the world. Platforms like Vercel have made this process simple and efficient, even for beginners. The first step is to ensure your project is properly version-controlled using Git and hosted on GitHub. Once your code is online, you can connect your repository to Vercel. After logging in, you simply import your project, and the platform automatically detects the framework you are using.Vercel handles most of the configuration for you, including build settings and deployment pipelines. With just a few clicks, your application is built and deployed to a live URL. This eliminates the need for complex server setups and manual configurations.One important aspect to consider is environment variables. These are used to store sensitive data like API keys. Vercel provides a simple interface to manage these variables securely.After deployment, you should test your application thoroughly to ensure everything works as expected. Check responsiveness, performance, and functionality across different devices.Deploying your project not only makes it accessible but also gives you confidence as a developer. It’s an essential skill that bridges the gap between development and real-world usage.",
        upvotes:10,
        date:"15 sep 2026"
    },
    {
        _id:"5a7d9e3c1f2b4a6d8c0e9f11",
        category:"Ai and Machine Learning",
        image:blog_ai,
        title:"Understanding the Basics of Machine Learning",
        content:"Deploying a web application is a crucial step in development. It allows your project to be accessible to users around the world. Platforms like Vercel have made this process simple and efficient, even for beginners. The first step is to ensure your project is properly version-controlled using Git and hosted on GitHub. Once your code is online, you can connect your repository to Vercel. After logging in, you simply import your project, and the platform automatically detects the framework you are using.Vercel handles most of the configuration for you, including build settings and deployment pipelines. With just a few clicks, your application is built and deployed to a live URL. This eliminates the need for complex server setups and manual configurations.One important aspect to consider is environment variables. These are used to store sensitive data like API keys. Vercel provides a simple interface to manage these variables securely.After deployment, you should test your application thoroughly to ensure everything works as expected. Check responsiveness, performance, and functionality across different devices.Deploying your project not only makes it accessible but also gives you confidence as a developer. It’s an essential skill that bridges the gap between development and real-world usage.",
        upvotes:20,
        date:"15 sep 2026"
    },
    {
        _id:"6512bc9d4e7f3a8c2d1e0b55",
        category:"Cyber security",
        image:blog_cs,
        title:"Protecting Web Applications from Common Threats",
        content:"Deploying a web application is a crucial step in development. It allows your project to be accessible to users around the world. Platforms like Vercel have made this process simple and efficient, even for beginners. The first step is to ensure your project is properly version-controlled using Git and hosted on GitHub. Once your code is online, you can connect your repository to Vercel. After logging in, you simply import your project, and the platform automatically detects the framework you are using.Vercel handles most of the configuration for you, including build settings and deployment pipelines. With just a few clicks, your application is built and deployed to a live URL. This eliminates the need for complex server setups and manual configurations.One important aspect to consider is environment variables. These are used to store sensitive data like API keys. Vercel provides a simple interface to manage these variables securely.After deployment, you should test your application thoroughly to ensure everything works as expected. Check responsiveness, performance, and functionality across different devices.Deploying your project not only makes it accessible but also gives you confidence as a developer. It’s an essential skill that bridges the gap between development and real-world usage.",
        upvotes:10,
        date:"15 sep 2026"
    },
    {
        _id:"60af3d9c8b1e4f7a2c6d5e99",
        category:"Linux",
        image:blog_linux,
        title:"Why Every Developer Should Learn Linux",
        content:"Deploying a web application is a crucial step in development. It allows your project to be accessible to users around the world. Platforms like Vercel have made this process simple and efficient, even for beginners. The first step is to ensure your project is properly version-controlled using Git and hosted on GitHub. Once your code is online, you can connect your repository to Vercel. After logging in, you simply import your project, and the platform automatically detects the framework you are using.Vercel handles most of the configuration for you, including build settings and deployment pipelines. With just a few clicks, your application is built and deployed to a live URL. This eliminates the need for complex server setups and manual configurations.One important aspect to consider is environment variables. These are used to store sensitive data like API keys. Vercel provides a simple interface to manage these variables securely.After deployment, you should test your application thoroughly to ensure everything works as expected. Check responsiveness, performance, and functionality across different devices.Deploying your project not only makes it accessible but also gives you confidence as a developer. It’s an essential skill that bridges the gap between development and real-world usage.",
        upvotes:300,
        date:"16 oct 2026"
    },
    {
        _id:"5f9d7a3c2b1e8f6a4d0c3b22",
        category:"Roadmaps",
        image:blog_roadmap,
        title:"A Clear Path to Becoming a Web Developer",
        content:"Deploying a web application is a crucial step in development. It allows your project to be accessible to users around the world. Platforms like Vercel have made this process simple and efficient, even for beginners. The first step is to ensure your project is properly version-controlled using Git and hosted on GitHub. Once your code is online, you can connect your repository to Vercel. After logging in, you simply import your project, and the platform automatically detects the framework you are using.Vercel handles most of the configuration for you, including build settings and deployment pipelines. With just a few clicks, your application is built and deployed to a live URL. This eliminates the need for complex server setups and manual configurations.One important aspect to consider is environment variables. These are used to store sensitive data like API keys. Vercel provides a simple interface to manage these variables securely.After deployment, you should test your application thoroughly to ensure everything works as expected. Check responsiveness, performance, and functionality across different devices.Deploying your project not only makes it accessible but also gives you confidence as a developer. It’s an essential skill that bridges the gap between development and real-world usage.",
        upvotes:10,
        date:"15 sep 2026"
    },
    {
        _id:"63b2e8d9c1f4a7b5d6e9c333",
        category:"Ai and Machine Learning",
        image:blog_news,
        title:"How AI is Changing the Future of Development",
        content:"Deploying a web application is a crucial step in development. It allows your project to be accessible to users around the world. Platforms like Vercel have made this process simple and efficient, even for beginners. The first step is to ensure your project is properly version-controlled using Git and hosted on GitHub. Once your code is online, you can connect your repository to Vercel. After logging in, you simply import your project, and the platform automatically detects the framework you are using.Vercel handles most of the configuration for you, including build settings and deployment pipelines. With just a few clicks, your application is built and deployed to a live URL. This eliminates the need for complex server setups and manual configurations.One important aspect to consider is environment variables. These are used to store sensitive data like API keys. Vercel provides a simple interface to manage these variables securely.After deployment, you should test your application thoroughly to ensure everything works as expected. Check responsiveness, performance, and functionality across different devices.Deploying your project not only makes it accessible but also gives you confidence as a developer. It’s an essential skill that bridges the gap between development and real-world usage.",
        upvotes:10,
        date:"15 sep 2026"
    },
    
]

export {blog_web_dev}