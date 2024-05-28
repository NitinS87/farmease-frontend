import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function GET(req: Request) {
  const jobs = prisma.job.findMany();

  return jobs;
}

export async function POST(req: Request) {
  const data = await req.json();

  const job = await prisma.job.create({
    data: {
      title: data.title,
      description: data.description,
      latitude: data.latitude,
      longitude: data.longitude,
      landmark: data.landmark,
      completionDays: data.completionDays,
      wage: data.wage,
      landArea: data.landArea,
      images: data.images,
      featured: data.featured,
      status: data.status,
      for: data.for,
      type: data.type,
      userId: data.userId,
    },
  });

  if (!job) {
    return { success: false, error: "Failed to create job" };
  }

  revalidatePath("/hiring");

  return job;
}
