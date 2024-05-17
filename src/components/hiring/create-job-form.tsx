"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAction } from "next-safe-action/hooks";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import Location from "@/components/hiring/location";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { createJob } from "@/app/server/create-job";
import { For, JobType, Status } from "@prisma/client";
import { User } from "next-auth";

const FormSchema = z.object({
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
});

export type FormType = z.infer<typeof FormSchema>;
const CreateJobForm = ({ user }: { user: User }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      latitude: 0,
      longitude: 0,
      landmark: "",
      images: [],
      requirements: null,
      featured: false,
      status: "IN_PROGRESS",
      type: "FERTILIZATION",
      for: "LABOUR",
    },
  });

  const { execute, status } = useAction(createJob, {
    onSuccess: (response) => {
      if (response.success) {
        toast({
          title: "Job created successfully",
          description: "Job has been created successfully",
        });

        // reset the form
        form.reset();
      } else {
        toast({
          title: "Job creation failed",
          description: "Job creation failed",
        });
      }
    },
    onError: (error) => {
      if (error.validationErrors) {
        console.log("Validation error", error.validationErrors);
        let errorDescription = "";
        const uniqueErrorMessages = new Set<string>();
        for (let key in error.validationErrors) {
          const errorMessages = (
            error.validationErrors as Record<string, string[]>
          )[key];
          errorMessages.forEach((message) => uniqueErrorMessages.add(message));
        }
        errorDescription = Array.from(uniqueErrorMessages).join(", \n");
        toast({
          title: "Validation error",
          description: errorDescription,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Job creation failed",
          description: "Job creation failed",
        });
      }
    },
    onExecute: () => {
      toast({
        title: "Creating job",
        description: "Creating job",
      });
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    const dataWithUserId = data as any;
    dataWithUserId.userId = user.id;

    execute(dataWithUserId);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-3">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Location form={form} />
        <FormField
          control={form.control}
          name="completionDays"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Completion Days</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter completion days"
                  type="number"
                  min={1}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="wage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wage</FormLabel>
              <FormControl>
                <Input
                  placeholder={`Enter wage greater than ${
                    form.watch("completionDays") * 250 || 0
                  }`}
                  type="number"
                  // min wage is 250*completion days
                  min={0}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="landArea"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Land Area</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter land area in square feet"
                  type="number"
                  min={0}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <Input placeholder="Enter images" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        {/* <Requirements form={form} /> */}
        <FormField
          control={form.control}
          name="featured"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between gap-3">
              <FormLabel>Featured</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>For</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="What type of job is it?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(JobType).map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="for"
          render={({ field }) => (
            <FormItem>
              <FormLabel>For</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="For whom this job is created for?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(For).map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={status === "executing"}
          aria-disabled={status === "executing"}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CreateJobForm;
