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
            <PostsComponent/>
          posts page
        </div>
    );
};

export default PostsPage;