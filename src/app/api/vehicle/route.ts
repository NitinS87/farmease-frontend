import prisma from "@/utils/prisma";
import { VehicleType } from "@prisma/client";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");

  if (!type) {
    const vehicles = await prisma.vehicle.findMany();
    return Response.json(vehicles);
  }

  const vehicles = await prisma.vehicle.findMany({
    where: {
      type: type as VehicleType,
    },
  });

  return Response.json(vehicles);
}
