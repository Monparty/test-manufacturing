import { prisma } from "./prisma";

// ไม่มี id (GET all, POST)
export function createCollectionHandlers(model) {
    return {
        GET: async () => {
            try {
                return Response.json(await model.findMany());
            } catch (error) {
                return handleApiError(error);
            }
        },
        POST: async (req) => {
            try {
                const data = await req.json();
                const result = await model.create({ data });
                return Response.json(result, { status: 201 });
            } catch (error) {
                return handleApiError(error);
            }
        },
    };
}

// มี id (GET by id, PUT, DELETE)
export function createResourceHandlers(model) {
    return {
        GET: async (_req, { params }) => {
            try {
                const id = Number((await params).id);
                const resp = await prisma.productionOrder.findUnique({
                    where: { id },
                });
                return Response.json(resp);
            } catch (error) {
                return handleApiError(error);
            }
        },
        PUT: async (req, { params }) => {
            try {
                const id = Number((await params).id);
                const body = await req.json();
                const updated = await model.update({
                    where: { id },
                    data: body,
                });
                return Response.json(updated);
            } catch (error) {
                return handleApiError(error);
            }
        },
        DELETE: async (_req, { params }) => {
            try {
                const id = Number((await params).id);
                const deleted = await model.delete({
                    where: { id },
                });
                return Response.json(deleted);
            } catch (error) {
                return handleApiError(error);
            }
        },
    };
}

export function handleApiError(error) {
    if (error instanceof prisma.PrismaClientKnownRequestError && error.code === "P2025") {
        return Response.json({ error: "Record not found" }, { status: 404 });
    }
    console.error("API Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
}
