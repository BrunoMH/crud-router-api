import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const id = params.id;
    try {
        const result = await fetch(`${process.env.API_URL}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const product = await result.json();
        return NextResponse.json({ data: product });
    } catch (error) {
        return NextResponse.error("Something went wrong while fetching the data.", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    const id = params.id;
    try {
        const result = await fetch(`${process.env.API_URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "API-key": process.env.API_KEY
            },
        });
        return NextResponse.json({ message: "Product deleted successfully." });
    } catch (error) {
        return NextResponse.error("Something went wrong while deleting the product.", { status: 500 });
    }
};

export const PUT = async (request, { params }) => {
    const id = params.id
    const product = await request.json()
    const result = await fetch(`${process.env.API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    })
    const productUpdate = await  result.json()
    return NextResponse.json({data:product}) 
}
