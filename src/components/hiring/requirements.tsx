import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";

const RequirementInput = ({ index }: { index: number }) => {
  const methods = useFormContext();
  const { register, unregister, watch, setValue } = methods;
  const fieldName = `requirements[${index}]`;
  const fieldKey = `${fieldName}.key`;
  const fieldValue = `${fieldName}.value`;

  const fieldKeyValue = watch(fieldKey);
  const fieldValueValue = watch(fieldValue);

  useEffect(() => {
    register(fieldKey);
    register(fieldValue);
    return () => {
      unregister(fieldKey);
      unregister(fieldValue);
    };
  }, [register, unregister, fieldKey, fieldValue]);

  // Debug: Check if methods are available
  console.log(methods);

  if (!methods) {
    return <div>Form context not found</div>;
  }

  return (
    <div>
      <FormItem>
        <FormLabel>Key</FormLabel>
        <FormControl>
          <Input
            placeholder="Enter key"
            value={fieldKeyValue || ""}
            onChange={(e) => setValue(fieldKey, e.target.value)}
          />
        </FormControl>
      </FormItem>
      <FormItem>
        <FormLabel>Value</FormLabel>
        <FormControl>
          <Input
            placeholder="Enter value"
            value={fieldValueValue || ""}
            onChange={(e) => setValue(fieldValue, e.target.value)}
          />
        </FormControl>
      </FormItem>
    </div>
  );
};

const Requirements = ({ form }: { form: any }) => {
  const [requirements, setRequirements] = React.useState([{}]);

  const addRequirement = () => {
    setRequirements((prev) => [...prev, {}]);
  };

  return (
    <div>
      {requirements.map((_, index) => (
        <RequirementInput key={index} index={index} />
      ))}
      <Button onClick={addRequirement}>Add Requirement</Button>
    </div>
  );
};

export default Requirements;
