import { Locale } from "@/i18n.config";
import { getJobs } from "@/utils/db";
import React, { FC } from "react";
import CustomLink from "../custom-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { getDictionary } from "@/lib/get-dictionary";

type JobsProps = {
  lang: Locale;
};
const Jobs: FC<JobsProps> = async ({ lang }) => {
  const { jobs } = await getDictionary(lang);
  const allJobs = await getJobs();
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start justify-center w-full">
      {allJobs.map((job) => (
        <Card className="w-full" key={job.id}>
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{job.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div>
                <h3 className="text-sm font-semibold">{jobs.duration}</h3>
                <p className="text-sm text-gray-500">
                  {job.completionDays} {jobs.days}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">{jobs.land}</h3>
                <p className="text-sm text-gray-500">{job.landArea}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">{jobs.location}</h3>
                <p className="text-sm text-gray-500">{job.landmark}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">{jobs.compensation}</h3>
                <p className="text-sm text-gray-500">
                  ₹{job.wage} {jobs.perJob}
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${job.user.phoneNumber}/?text=I%20am%20interested%20in%20the%20job%20${job.title}`}
              className="w-full"
            >
              <Button className="mt-4" variant={"default"}>
                {jobs.apply}
              </Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default Jobs;
