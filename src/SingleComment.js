import { useState,useEffect } from "react";

function SingleComment (props){
    console.log('single comment props >', props);
    const [commentText, setCommentText] = useState('');

    useEffect(()=>{
        if(props.text){
            setCommentText(props.text);
        }
    }, [props.text])

    const handleInput = (e) => {
        setCommentText(e.targer.value);
    }

    return( 
        <form className="comments-item">
            <div className="comments-item-delete">&times;</div>
            <input type="text" value={commentText} onChange={handleInput}/>
            <input type="submit" hidden />
        </form>
    )
}

export default SingleComment;