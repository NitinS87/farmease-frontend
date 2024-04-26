import React from "react";
import { Button } from "../ui/button";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";

const ApplyButton = ({
  job,
  lang,
  jobs,
}: {
  job: any;
  lang: Locale;
  jobs: Awaited<ReturnType<typeof getDictionary>>["jobs"];
}) => {
  // Calculate the WhatsApp message
  const whatsappMessage = `I am interested in the job ${job.title}. Here are the details:\n\nTitle: ${job.title}\nDuration: ${job.completionDays} days\nLand: ${job.landArea}\nLocation: ${job.landmark}\nCompensation: ₹${job.wage} per job`;

  // Encode the WhatsApp message
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);

  return (
    <a
      href={`https://wa.me/${job.user.phoneNumber}/?text=${encodedWhatsappMessage}`}
      className="w-full"
      target="_blank" // Open in new tab
      rel="noopener noreferrer" // Security best practice
    >
      <Button className="mt-4" variant={"default"}>
        {jobs.apply}
      </Button>
    </a>
  );
};

export default ApplyButton;
