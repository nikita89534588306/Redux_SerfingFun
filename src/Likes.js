import { connect } from "react-redux"

function Likes(props){
    console.log(props);
    return(
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤  {props.likes}</button>
            <button onClick={props.onDecrimentLikes} >Dislike</button>
        </div>
    )
}

function mapStateToProps(store) {
    return{
        likes: store.likes
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrementLikes: () => {   dispatch({type:"INC"})    },
        onDecrimentLikes: () => {   dispatch({type:"DEC"})    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);