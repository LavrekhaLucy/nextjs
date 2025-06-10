import {Metadata} from "next";
import {SaveAction} from "@/server-actions/ServerActions";
import {CreateCarsComponent} from "@/components/create-cars/CreateCarsComponent";


export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "Create cars page",

    }
}
export default function CreatePage ()   {

    return (

    <div className={'Cars'}>

        <h4>Create cars page</h4>

        <form action={SaveAction}>
            <input type='text' name='brand' placeholder='Brand' />
            <input type='text' name='year' placeholder='Year' />
            <input type='text' name='price' placeholder='Price' />
            <button type="submit">Save</button>

        </form>

        <CreateCarsComponent/>
    </div>

    );
};
