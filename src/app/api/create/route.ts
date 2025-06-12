import {NextRequest, NextResponse} from 'next/server';
import {carsValidator} from '@/validator/carsValidator';
import {sendCars} from '@/services/api.service';

export async function POST(req: NextRequest) {

    const body = await req.json();
    const { error, value } = carsValidator.validate(body, { abortEarly: false });

    if (error) {
        return NextResponse.json({ error: error.details.map(e => e.message) }, { status: 400 });
    }

    await sendCars(value.brand,value.year,value.price);

    return NextResponse.json({ success: true });
}