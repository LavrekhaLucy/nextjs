'use server';

import {sendCars} from "@/services/api.service";
import {revalidatePath} from "next/cache";

export const SaveAction = async (formData: FormData) => {
    const brand = formData.get("brand");
    const year = formData.get("year");
    const price = formData.get("price");

    if (
        typeof brand !== "string" ||
        typeof year !== "string" ||
        typeof price !== "string"
    ) {
        throw new Error("Incorrect data");
    }

    const parsedYear = parseInt(year, 10);
    const parsedPrice = parseInt(price);


    if (!brand.trim()) {
        throw new Error("Enter the brand name");
    }

    if (isNaN(parsedYear) || parsedYear < 1900 || parsedYear > new Date().getFullYear() + 1) {
        throw new Error("Year entered incorrectly");
    }

    if (isNaN(parsedPrice) || parsedPrice < 0) {
        throw new Error("Price must be a positive number");
    }


    await sendCars(brand, parsedYear, parsedPrice);

    revalidatePath("/create");

};
