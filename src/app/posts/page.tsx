import {Metadata} from "next";
import {PostsComponent} from "@/components/posts/PostsComponent";


export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "Posts page title",

    }
}
const PostsPage = () => {
    return (
        <div>
            <h4>Posts page</h4>
            <PostsComponent/>

        </div>
    );
};

export default PostsPage;