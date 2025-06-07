        'use server';

        import sql from "better-sqlite3";

                import {revalidatePath} from "next/cache";

        const db = sql ('cars.db')


        export const SaveAction = async (formData:FormData) => {
            // console.log(formData);
            // console.log('Save Action');

        const brandValue = formData.get('brand');
        const yearValue = formData.get('year');

        db.prepare(`insert into cars (brand,year)  values(?,?)`)
         .run(brandValue, yearValue);

       revalidatePath('/create');
        }

         type Car = { id: number, brand: string, year: number};

         export const getCars =async (): Promise<Car[]> => {
             return db.prepare<Car[]>(`select * from cars`).all() as Car[];
         }

