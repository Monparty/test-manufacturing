import { createCollectionHandlers } from "@/app/lib/api-factory";
import { prisma } from "@/app/lib/prisma";

export const { GET, POST } = createCollectionHandlers(prisma.productionOrder);

/*
export async function GET() {
    try {
        const resp = await prisma.productionOrder.findMany();
        return Response.json(resp);
    } catch (error) {
        return handleApiError(error);
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const resp = await prisma.productionOrder.create({ data: body });
        return Response.json(resp, { status: 201 });
    } catch (error) {
        return handleApiError(error);
    }
}
*/
