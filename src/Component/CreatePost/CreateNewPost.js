import { useNavigate } from 'react-router-dom';
import './CreateNewPost.css';
function CreateNewPost() {
    const navigate = useNavigate();


    return (
        <div>
            <div className='DescriptionBodysection'>

                <div className='Textarea'>
                    <div><input type='text' placeholder='Title' className='DescriptionTitle' /></div>
                    <hr className='DescriptionSepratingLine' />
                    <div><textarea placeholder="Description" className='DescriptionTextArea'></textarea></div><br></br>
                    <button className='DescriptionCancelButton'><strong>Cancel</strong></button>
                    <button className='DescriptionSaveButton' ><strong>Save</strong></button>
                </div>
            </div>
        </div>
    );
}
export default CreateNewPost;

