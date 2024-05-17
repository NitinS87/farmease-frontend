"use server";

import { action } from "@/lib/safe-action";
import prisma from "@/utils/prisma";
import { For, JobType, Status } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z
  .object({
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    description: z.string(),
    latitude: z.coerce.number().default(0),
    longitude: z.coerce.number().default(0),
    landmark: z.string().default(""),
    completionDays: z.coerce.number().min(1),
    wage: z.coerce.number().int().min(0),
    landArea: z.coerce.number().default(0),
    images: z.array(z.string()),
    requirements: z.record(z.any()).nullable(),
    featured: z.boolean().default(false),
    status: z.nativeEnum(Status), // Assuming Status and JobType are enums
    for: z.nativeEnum(For),
    type: z.nativeEnum(JobType),
    userId: z.string(),
  })
  .refine((data) => data.wage > data.completionDays * 250, {
    message: "Wage must be greater than completionDays * 250",
    path: ["wage"], // The field where the error will be added
  });

export const createJob = action(schema, async (data) => {
  // Save the job to the database
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

  return { success: true };
});
