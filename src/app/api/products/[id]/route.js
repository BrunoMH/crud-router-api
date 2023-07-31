import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const id = params.id
    const result = await fetch(`${process.env.API_URL}/${id}`, {
        headers: {
            "Content-Type": "application/json",
        }
    })
    const product = await result.json()
    return NextResponse.json({ data: product })
}

export const DELETE = async (request, { params }) => {
    const id = params.id
    const result = await fetch(`${process.env.API_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
}

