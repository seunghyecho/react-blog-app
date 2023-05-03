import Responsive from "@/components/common/Responsive";
import PaginationContainer from "@/containers/posts/PaginationContainer";
import PostListContainer from "@/containers/posts/PostListContainer";
import styled from "styled-components";

const PostsBlock = styled(Responsive)``;
function Posts(){
    return(
        <PostsBlock>
            <PostListContainer />
            <PaginationContainer/>
        </PostsBlock>
    )
}
export default Posts;