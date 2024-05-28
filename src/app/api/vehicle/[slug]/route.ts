import prisma from "@/utils/prisma";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  // console.log(params);
  const vehicle = await prisma.vehicle.findUnique({
    where: { id: params.slug },
  });

  return Response.json(vehicle);
}
