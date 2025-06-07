import {Metadata} from "next";
import {getCars, SaveAction} from "@/server-actions/ServerActions";
import Form from "next/form";


export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "Create cars page title",

    }
}
export default async function CreatePage ()   {


    const carsArray = await getCars();

    return (

    <div className={'Cars'}>

        <Form action={SaveAction}>
            <input type='text' name='brand' placeholder='Brand' />
            <input type='text' name='year' placeholder='Year' />
            <button type="submit">Save</button>

        </Form>


        <h4>create cars page</h4>


        {
            carsArray.map(car => (<div key={car.id}>{car.brand} --- {car.year}</div>))
        }

    </div>

    );
};

