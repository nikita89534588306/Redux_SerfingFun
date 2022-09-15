import { connect } from "react-redux"
import { decLikes, incLikes } from "./redux/actions"

function Likes(props){
    return(
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤  {props.likes}</button>
            <button onClick={props.onDecrimentLikes} >Dislike</button>
        </div>
    )
}

function mapStateToProps(store) {
    return{
        likes: store.likes.valueLikes
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrementLikes: () => {   dispatch(  incLikes() )    },
        onDecrimentLikes: () => {   dispatch(  decLikes() )    },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);