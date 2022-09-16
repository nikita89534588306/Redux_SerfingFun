import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate } from "./redux/actions"
import SingleComment from "./SingleComment";
import uniqid from 'uniqid';

function Comments (props){
    console.log('comments props >', props);

    const [textComment, setTExtComment] = useState("")
    const comments = useSelector(state => {
        console.log(state)
        return state.commentsReducer.comments
    });
    const dispatch = useDispatch();


    const handleInput = (e) => {
        console.log("value input >>>", e.target.value);
        setTExtComment(e.target.value)

    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit >>',textComment);
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
    }

    return(
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" value={textComment} onChange ={handleInput}/>
                <input type="submit" hidden />
            </form>
            {
                comments.map(component =>{

                        return <SingleComment text={component.text} id={component.id}/>
                })
            }
            
        </div>
       

    )
}

export default Comments;