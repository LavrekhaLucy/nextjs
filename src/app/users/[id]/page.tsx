import {Metadata} from "next";

type Props = {
    params:Promise<{id:string}>
}
export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "User page title",

    }
}


const UserPage= async({params}:Props) => {
  const {id} = await params;
    console.log(id);

    return (
        <div>
          user page content {id}
        </div>
    );
};

export default UserPage;