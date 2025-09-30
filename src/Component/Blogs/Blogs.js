import { useNavigate } from 'react-router-dom';
import './Blogs.css';
function Blogs() {
    const navigate=useNavigate();
    const navigateToCreatenewpost=()=>{
        navigate('/createnewpost')
    }
    return (
        <div className='backgroundcolr'>
            <div class>
                <div className='blogspage   '>
                    <div>
                        <div className='blogspagenameandcretenewbutton'>

                            <div className='blogsname'>Blogs</div>
<<<<<<< HEAD
                            <div className='cratenewpostbutton'><i class="fa fa-plus-circle createNewPostIcon "  aria-hidden="true"></i>create new post</div>
=======
                            <div className='cratenewpostbutton' onClick={navigateToCreatenewpost}>create new post</div>
>>>>>>> 40dc1b94e955b752698012f820e8f0f8d1693a6c
                        </div>
                        <div>Public your passion, in your way...</div>
                        <hr />
                    </div>
                    {/* main blogs start from here */}

                    <div className='firstblog'>
                        <div className='blogstitle'>Hello World</div>
                        <div><strong>Created by:</strong><em>Shardul pawar</em></div>
                        <div><strong>Created At:</strong><em>29/08/2005</em></div>
                        <hr />
                        <div> Hello Shardul Hello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHhardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello Shalo ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHellolo ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello lHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHellolo ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHellolo ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHellolo ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello  ShardulHello Shar my nam vvv vShardulHello Shar my namShardulHello Shar my namedulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHellolo ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHellolo ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello ShardulHello Shardul  ShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my namShardulHello Shar my nam</div>
                        {/* last button section start from here */}
                        <div className='lastbuttons'>
                            <div className='lastbuttons'>
                                <button className='footerbuttons like'>like</button>
                                <button className='footerbuttons dislike'>dislike</button>
                            </div>
                            <div className='lastbuttons'>
                                <button className='footerbuttons edit'>edit</button>
                                <button className='footerbuttons delete'>Delete</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default Blogs;