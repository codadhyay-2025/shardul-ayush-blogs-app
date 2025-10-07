import { useNavigate, useParams } from 'react-router-dom';
import './CreateNewPost.css';
import axios from "axios";
import { useEffect, useState } from "react";


function CreateNewPost() {
    const{id}=useParams();
    const navigate = useNavigate();
    const [userDescriptiondata, setuserDescriptionData] = useState({ Title: "", Description: "" });
    function handelSave() {
        console.log(userDescriptiondata)
        navigate("/blogs")
    }
    function handelSave() {
        if (id) {
            axios.put("http://localhost:3001/blog/"+id,userDescriptiondata)
                .then(() => {
                    navigate("/blogs")
                })
            }
else {


            axios.post('http://localhost:3001/blog', userDescriptiondata)
                .then(response => {
                    alert("Title updated Successfully")
                    navigate("/blogs ")
                })
                .catch(error => {
                    console.error("Title updated Failed", error);
                });
        }
    }
    function handelChangeTitle(event) {
        let user = { ...userDescriptiondata };
        user["Title"] = event.target.value;
        setuserDescriptionData(user)


    }
    function handelChangeDescriptionTextArea(event) {
        let user = { ...userDescriptiondata };
        user["Description"] = event.target.value;
        setuserDescriptionData(user)
    }
useEffect(()=>{
    if(id){
        axios.get("http://localhost:3001/blog/"+id,userDescriptiondata)
        .then((response)=>{
                   setuserDescriptionData(response.data);
 

        })
    }
},[]);


    return (
        <div>
            <div className='DescriptionBodysection'>

                <div className='Textarea'>
                    <div><input type='text' placeholder='Title' className='DescriptionTitle' onChange={handelChangeTitle} value={userDescriptiondata.Title} /></div>
                    <hr className='DescriptionSepratingLine' />
                    <div><textarea placeholder="Description" className='DescriptionTextArea' onChange={handelChangeDescriptionTextArea} value={userDescriptiondata.Description}></textarea></div><br></br>
                    <button className='DescriptionCancelButton'><strong>Cancel</strong></button>
                    <button className='DescriptionSaveButton' onClick={handelSave}><strong>Save</strong></button>
                </div>
            </div>
        </div>
    );
}
export default CreateNewPost;

