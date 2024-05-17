import React from "react";
import CreateJobForm from "@/components/hiring/create-job-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const CreateJobPage = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) return redirect("/api/auth/signin");

  return (
    <main className="container flex flex-col items-start p-4 gap-5 lg:gap-8 justify-start w-full min-h-[calc(100%_-_8rem)]">
      <CreateJobForm user={user} />
    </main>
  );
};

export default CreateJobPage;
