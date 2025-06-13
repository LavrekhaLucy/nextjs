import {NextRequest, NextResponse} from 'next/server';
import {sendCars} from "@/services/api.service";

export async function POST(req: NextRequest) {

    const body = await req.json();

    if (!body.brand || typeof body.brand !== 'string') {
        return NextResponse.json({ error: 'Brand is required' }, { status: 400 });
    }
    if (!body.year || typeof body.year !== 'number') {
        return NextResponse.json({ error: 'Year is required and must be a number' }, { status: 400 });
    }
    if (!body.price || typeof body.price !== 'number') {
        return NextResponse.json({ error: 'Price is required and must be a number' }, { status: 400 });
    }


    await sendCars(body.brand, body.year, body.price);
        return NextResponse.json({ success: true });

}

