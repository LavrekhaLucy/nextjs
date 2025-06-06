import {getAllPosts} from "@/services/api.service";
import {PostComponent} from "@/components/post/PostComponent";

export const PostsComponent = async() => {
    const posts = await getAllPosts();

    return (
        <div>
            {
                posts.map(post => <PostComponent  key={post.id} post={post} />)
            }

        </div>
    );
};