import {SearchParams} from "next/dist/server/request/search-params";
import PostService from "@/services/PostService";

type Props = {
    params:Promise<{id:string}>;
    searchParams:Promise<SearchParams>;
}


const PostPage = async(props:Props) => {


    return (
        <div>

            <h4>Post page content </h4>
            <PostService {...props} />
        </div>
    );
};

export default PostPage;