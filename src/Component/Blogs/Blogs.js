import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import './Blogs.css';
function Blogs() {
    // const[likes,setlikes]=useState({})
    const navigate = useNavigate();
    const navigateToCreatenewpost = () => {
        navigate('/createnewpost')
    }
    const [blog, setBlog] = useState([])






    function getJsonData() {
        axios.get(`http://localhost:3001/blog`).then((res) => {
            setBlog(res.data);
        })}
//         useEffect(() => {
//     getJsondata();
//   }, []);

    useEffect(() => {
            getJsonData();
            // axios.get(`http://localhost:3001/blog`).then((res) => {
            // setBlog(res.data);

        // })
    }, []);
    const handelDelete = (id) => {
        axios.delete(`http://localhost:3001/blog/${id}`).then(() => {
            setBlog(blog.filter((b) => b.id !== id));
        });
    }
    const handlelike = (blog) => {
        const userlike = localStorage.getItem('useremail')


        if (blog.likes.includes(userlike)) {

        }
        else{
        const updateLikes = [...blog.likes, userlike]
        axios.patch("http://localhost:3001/blog/" +blog.id, { likes: updateLikes })
        .then(()=>{
            getJsonData()
        })
        .catch(error => console.log("failed to udate like:",error));

        // console.log(likes);
    }

    }






    return (
        <div className='backgroundcolr'>
            <div class>
                <div className='blogspage'>
                    <div>
                        <div className='blogspagenameandcretenewbutton'>

                            <div className='blogsname'>Blogs</div>
                            <div className='cratenewpostbutton' onClick={navigateToCreatenewpost}><i class="fa fa-plus-circle createNewPostIcon " aria-hidden="true"></i>create new post</div>
                        </div>
                        <div>Public your passion, in your way...</div>
                        <hr />
                    </div>
                    {/* main blogs start from here */}
                    {blog.map((blog) => (
                        console.log("title" + blog.Title),
                        console.log(blog.Description),


                        <div className='firstblog' key={blog.id} >
                            <div className='blogstitle'>{blog.Title}</div>
                            <div ><strong>Created by:</strong><em>{blog.CreatedBy}</em></div>
                            <div ><strong>Created At:</strong><em>{blog.CreatedAt}</em></div>
                            <hr />
                            <div >{blog.Description}</div>
                            {/* last button section start from here */}
                            <div className='lastbuttons'>
                                <div className='lastbuttons'>
                                    <button className='footerbuttons like' onClick={() => handlelike(blog)}><i class="fa fa-thumbs-up  LikeIcon" aria-hidden="true"></i>{blog.likes.length}Like</button>
                                    <button className='footerbuttons dislike'><i class="fa fa-thumbs-down  DislikeIcon" aria-hidden="true"></i>Dislike</button>
                                </div>
                                <div className='lastbuttons'>
                                    <button className='footerbuttons edit' ><i class="fa fa-pencil EditIcon" aria-hidden="true"></i>Edit</button>
                                    <button className='footerbuttons delete' onClick={() => handelDelete(blog.id)}><i class="fa fa-trash DeleteIcon" aria-hidden="true"></i>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )

}
export default Blogs;