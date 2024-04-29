import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const Requirements = ({ form }: { form: any }) => {
  return (
    <FormField
      control={form.control}
      name="requirements"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Requirements</FormLabel>
          <FormControl>
            <Input placeholder="Enter requirements" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Requirements;
