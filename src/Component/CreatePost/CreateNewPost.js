import { useNavigate } from 'react-router-dom';
import './CreateNewPost.css';
import axios from "axios";
import React, { useState } from "react";


function CreateNewPost() {
    const navigate = useNavigate();
     const[userDescriptiondata,setuserDescriptionData]=useState({Title:"",Description:""});
   function handelChangeDescription (){
       console.log(userDescriptiondata)
       navigate("/description")
   }
   function handelChangeDescription(){
    axios.post('http://localhost:3001/blog',userDescriptiondata)
    .then(response=>{
        alert("Title updated Successfully")
        navigate("/description ")
    })
    .catch(error=>{
        console.error("Title updated Failed",error);
    });
}
   function handelChangeTitle(event){
      let user={...userDescriptiondata};
           user["Title"]=event.target.value;
           setuserDescriptionData(user)
       
       
   }
   function handelChangeDescriptionTextArea(event){
       let user={...userDescriptiondata};
       user["Description"]=event.target.value;
       setuserDescriptionData(user)
   }



    return (
        <div>
            <div className='DescriptionBodysection'>

                <div className='Textarea'>
                    <div><input type='text' placeholder='Title' className='DescriptionTitle' onChange={handelChangeTitle} value={userDescriptiondata.Title}/></div>
                    <hr className='DescriptionSepratingLine' />
                    <div><textarea placeholder="Description" className='DescriptionTextArea' onChange={handelChangeDescriptionTextArea}value={userDescriptiondata.Description}></textarea></div><br></br>
                    <button className='DescriptionCancelButton'><strong>Cancel</strong></button>
                    <button className='DescriptionSaveButton' onClick={handelChangeDescription}><strong>Save</strong></button>
                </div>
            </div>
        </div>
    );
}
export default CreateNewPost;

