import Item, { IItem } from '@/models/items';
import dbConnect from '@/server/dbConnect';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();

  try {
    const items: IItem[] = await Item.find({});
    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    console.error('Failed to find items:', error);
    return NextResponse.json({ success: false, message: "Failed to find items" }, { status: 400 });
  }
}

export async function POST(request: Request) {
  await dbConnect();

  try {
    const body = await request.json();
    const item: IItem = await Item.create(body);
    return NextResponse.json({ success: true, data: item });
  } catch (error) {
    console.error('Failed to create item:', error);
    return NextResponse.json({ success: false, message: "Failed to create item" }, { status: 400 });
  }
}
