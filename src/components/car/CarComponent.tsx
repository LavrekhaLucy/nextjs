import {ICar} from "@/models/ICar";
import Link from "next/link";

interface CarComponentProps {
    car: ICar
}

export const CarComponent = ({car}: CarComponentProps) => {


    return (
        <div>
            {
                <Link href={`/cars/` + car.id.toString()}> {car.id} --- {car.brand}</Link>
            }
        </div>
    );
};