import CommentService from "@/services/CommentService";
import {SearchParams} from "next/dist/server/request/search-params";

type Props = {
    params:Promise<{id:string}>
    searchParams:Promise<SearchParams>
}


const CommentPage = async(props:Props) => {


    return (
        <div>
            <h4>Comment page content </h4>
            <CommentService {...props} />

        </div>
    );
};

export default CommentPage;