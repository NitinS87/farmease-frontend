import prisma from "@/utils/prisma";

export async function GET(req: Request) {
  const vehicles = prisma.vehicle.findMany();

  return vehicles;
}
