import PostViewerContainer from "@/containers/post/PostViewerContainer";

function Posts(){
    const id = window.localStorage.getItem('_id')
    return(
        <PostViewerContainer postId={id}/>
    )
}
export default Posts;