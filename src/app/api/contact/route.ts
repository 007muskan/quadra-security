import { connectDB } from "@/lib/mongodb";
import { Contact } from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectDB();
    await Contact.create(body);

    return NextResponse.json({
      success: true,
      message: "Contact saved successfully!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to save contact." },
      { status: 500 }
    );
  }
}
