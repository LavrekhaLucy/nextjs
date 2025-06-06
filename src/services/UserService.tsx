import {IUser} from "@/models/IUser";
import {SearchParams} from "next/dist/server/request/search-params";

type Props = {
    params:Promise<{id:string}>;
    searchParams:Promise<SearchParams>;
}

const UserService= async({ searchParams}:Props) => {
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === 'string')
    {obj = JSON.parse(data) as IUser}


    return (
        <div>
            {obj &&
                <>
                    <p>User ID: {obj.id}</p>
                    <p>User Name: {obj.name}</p>
                    <p>User Email: {obj.email}</p>
                </>
            }

        </div>

    );
};

export default UserService;