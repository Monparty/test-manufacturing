import { createCollectionHandlers } from "@/app/lib/api-factory";
import { prisma } from "@/app/lib/prisma";

export const { GET, POST } = createCollectionHandlers(prisma.inventory);
