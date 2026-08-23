import { createResourceHandlers, handleApiError } from "@/app/lib/api-factory";
import { prisma } from "@/app/lib/prisma";

export const { PUT, DELETE } = createResourceHandlers(prisma.machine);

export async function GET(req, { params }) {
    try {
        const id = Number((await params).id);
        const resp = await prisma.machine.findUnique({
            where: { id },
            include: {
                maintenance: true,
            },
        });
        return Response.json(resp);
    } catch (error) {
        return handleApiError(error);
    }
}
