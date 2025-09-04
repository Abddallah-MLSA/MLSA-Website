import connectToDatabase from "@/config/db";
import Certificate from "@/models/certificateModel";
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest,{ params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    await connectToDatabase()
    let certificate = await Certificate.findById(id)
    if(certificate){

         return new Response(JSON.stringify(certificate), {
            status: 200,
            })
    }
    return  new Response("Error message", {
            status: 404,
        })

}