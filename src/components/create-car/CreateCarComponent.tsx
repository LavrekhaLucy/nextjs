import Link from "next/link";
import {ICar} from "@/models/ICar";

interface CreateCarComponentProps {
    car: ICar
}

export const CreateCarComponent = ({car}: CreateCarComponentProps) => {
    return (
        <>
            <div>
                {
                    <Link href={`/create/` + car.id.toString()}> {car.brand} --- {car.year} --- {car.price}</Link>
                }
            </div>
        </>
    );
};