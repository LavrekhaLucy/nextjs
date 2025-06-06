import {Metadata} from "next";
import UserService from "@/services/UserService";
import {SearchParams} from "next/dist/server/request/search-params";


type Props = {
    params: Promise<{id: string}>;
    searchParams: Promise<SearchParams>;
}
export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "User page title",

    }
}
const UserPage= async(props:Props) => {


    return (
        <>

            <h4>User page content</h4>
            <UserService {...props} />


        </>


    );
};

export default UserPage;