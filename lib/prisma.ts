// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

declare global {
  // Prevent multiple instances of PrismaClient in development.
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
