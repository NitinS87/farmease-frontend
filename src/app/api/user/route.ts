import prisma from "@/utils/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  if (searchParams.get("id") === null) {
    const users = await prisma.user.findMany();
    return Response.json(users);
  }

  const user = await prisma.user.findUnique({
    where: {
      id: searchParams.get("id")!,
    },
  });
  return Response.json(user);
}
