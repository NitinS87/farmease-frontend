import React, { useEffect } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const Location = ({ form }: { form: any }) => {
  const { setValue } = form;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setValue("latitude", position.coords.latitude);
          setValue("longitude", position.coords.longitude);

          // Fetch the landmark using the Google Maps Geocoding API
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=YOUR_API_KEY`
          );
          const data = await response.json();
          const landmark = data.results[0].formatted_address;

          setValue("landmark", landmark);
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
              <Input placeholder="Enter latitude" {...field} />
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
              <Input placeholder="Enter longitude" {...field} />
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
