import {SearchParams} from "next/dist/server/request/search-params";
import {IPost} from "@/models/IPost";

type Props = {
    params:Promise<{id:string}>;
    searchParams:Promise<SearchParams>;
}

const PostService= async({ searchParams}:Props) => {
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === 'string')
    {obj = JSON.parse(data) as IPost}


    return (
        <div>
            {obj &&
                <>
                    <p>Post ID: {obj.id}</p>
                    <p>Post Title: {obj.title}</p>
                    <p>Post Body: {obj.body}</p>
                </>
            }

        </div>

    );
};

export default PostService;