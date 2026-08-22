import { createResourceHandlers } from "@/app/lib/api-factory";
import { prisma } from "@/app/lib/prisma";

export const { GET, PUT, DELETE } = createResourceHandlers(prisma.productionOrder);

/*
export async function GET(req, { params }) {
    try {
        const id = Number((await params).id);
        const resp = await prisma.productionOrder.findUnique({
            where: { id },
        });
        return Response.json(resp);
    } catch (error) {
        return handleApiError(error);
    }
}

export async function PUT(req, { params }) {
    try {
        const body = await req.json();
        const id = Number((await params).id);
        const resp = await prisma.productionOrder.update({
            where: { id },
            data: body,
        });
        return Response.json(resp);
    } catch (error) {
        return handleApiError(error);
    }
}

export async function DELETE(req, { params }) {
    try {
        const id = Number((await params).id);
        const resp = await prisma.productionOrder.delete({
            where: { id },
        });
        return Response.json(resp);
    } catch (error) {
        return handleApiError(error);
    }
}
*/
