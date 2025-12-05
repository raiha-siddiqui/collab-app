import { PrismaClient } from "../../generated/prisma/client.js";

const prisma = new PrismaClient({
    accelerateUrl: process.env.PRISMA_ACCELERATE_URL ?? "",
    log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['warn', 'error'],
})

export default prisma;