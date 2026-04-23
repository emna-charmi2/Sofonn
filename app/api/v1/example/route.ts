import { NextResponse } from 'next/server';
import { z } from 'zod';

const ExampleSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      message: "API v1 example route is working",
      data: {
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validation with Zod
    const validatedData = ExampleSchema.safeParse(body);
    
    if (!validatedData.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Validation Error", 
          details: validatedData.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    // Process data (e.g., save to DB)
    return NextResponse.json({
      success: true,
      message: "Data received and validated",
      data: validatedData.data,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}
