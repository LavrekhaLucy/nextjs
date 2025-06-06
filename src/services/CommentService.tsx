import {SearchParams} from "next/dist/server/request/search-params";
import {IComment} from "@/models/IComment";

type Props = {
    params:Promise<{id:string}>;
    searchParams:Promise<SearchParams>;
}

const CommentService= async({ searchParams}:Props) => {
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === 'string')
    {obj = JSON.parse(data) as IComment}


    return (
        <div>
            {obj &&
                <>
                    <p>Comment ID: {obj.id}</p>
                    <p>Comment Name: {obj.name}</p>
                    <p>Comment Body: {obj.body}</p>
                </>
            }

        </div>

    );
};

export default CommentService;