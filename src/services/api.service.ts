import {ICar} from "@/models/ICar";


export const getAllCars = async (): Promise<ICar[]> => {
    const allCars = await fetch('http://185.69.152.209/carsAPI/v1/cars', {
        next:{revalidate:3}
    });

    return  await allCars.json();


};


export const sendCars = async (brand: string, year: number, price:number): Promise<ICar[]> => {
    const newAllCars = await fetch('http://185.69.152.209/carsAPI/v1/cars', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({brand, year, price}),
    });

    return await newAllCars.json();

}