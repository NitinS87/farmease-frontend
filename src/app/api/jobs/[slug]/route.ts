import prisma from "@/utils/prisma";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  console.log(params);

  let jobs = await prisma.job.findUnique({
    where: {
      id: params.slug,
    },
  });

  return Response.json(jobs);
}
