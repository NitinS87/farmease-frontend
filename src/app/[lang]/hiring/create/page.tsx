import React from "react";
import CreateJobForm from "@/components/hiring/create-job-form";

const CreateJobPage = () => {
  return (
    <main className="container flex flex-col items-start p-4 gap-5 lg:gap-8 justify-start w-full min-h-[calc(100%_-_8rem)]">
      <CreateJobForm />
    </main>
  );
};

export default CreateJobPage;
