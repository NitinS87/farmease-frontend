import React, { useEffect } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { getAddress } from "@/lib/action";

const Location = ({ form }: { form: any }) => {
  const { setValue } = form;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setValue("latitude", position.coords.latitude);
          setValue("longitude", position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    }
  }, [setValue]);
  return (
    <>
      <FormField
        control={form.control}
        name="latitude"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Latitude</FormLabel>
            <FormControl>
              <Input placeholder="Enter latitude" disabled {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="longitude"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Longitude</FormLabel>
            <FormControl>
              <Input placeholder="Enter longitude" disabled {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="landmark"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Landmark</FormLabel>
            <FormControl>
              <Input placeholder="Enter landmark" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default Location;
