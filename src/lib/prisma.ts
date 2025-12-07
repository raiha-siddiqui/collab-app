import { PrismaClient } from "../../generated/prisma/client.js";
const isProd = process.env.NODE_ENV === "production";

const options: any = isProd
  ? { accelerateUrl: process.env.PRISMA_ACCELERATE_URL }
  : {};


const prisma = new PrismaClient(options);

export default prisma; 


// import "dotenv/config";
// import { PrismaClient } from "../../generated/prisma/client.js";

// const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

// if (!process.env.PRISMA_ACCELERATE_URL) {
//     throw new Error("PRISMA_ACCELERATE_URL is required for the 'client' engine type. Check your .env file.");
// }

// const options: any = {

//     accelerateUrl: process.env.PRISMA_ACCELERATE_URL, 
//     log: process.env.NODE_ENV === 'development' 
//       ? ['query', 'info', 'warn', 'error'] 
//       : ['warn', 'error'],
// };

// export const prisma = globalForPrisma.prisma ?? new PrismaClient(options);

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }

// export default prisma;