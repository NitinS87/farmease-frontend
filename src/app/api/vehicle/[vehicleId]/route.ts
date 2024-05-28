import prisma from "@/utils/prisma";

export async function GET(
  req: Request,
  { params }: { params: { vehicleId: string } }
) {
  const vehicle = prisma.vehicle.findUnique({
    where: { id: params.vehicleId },
  });

  return vehicle;
}
