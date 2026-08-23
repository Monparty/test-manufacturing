import { createResourceHandlers } from "@/app/lib/api-factory";
import { prisma } from "@/app/lib/prisma";

export const { GET, PUT, DELETE } = createResourceHandlers(prisma.machine);
