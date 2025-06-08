'use server';

import {sendCars} from "@/services/api.service";
import {revalidatePath} from "next/cache";

export const SaveAction = async (formData: FormData) => {
    const brand = formData.get("brand");
    const year = formData.get("year");

    if (typeof brand !== "string" || typeof year !== "string") {
        throw new Error("Невірні дані");
    }

    const parsedYear = parseInt(year, 10);
    if (!brand.trim() || isNaN(parsedYear)) {
        throw new Error("Введіть коректну марку та рік");
    }

    await sendCars(brand, parsedYear);


    revalidatePath("/cars");




};
