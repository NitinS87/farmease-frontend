"use server";

import { signOut } from "next-auth/react";

export async function logout(): Promise<void> {
  await signOut();
}

export async function getAddress(position: GeolocationPosition) {
  // Fetch the landmark using the Google Maps Geocoding API
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  return data.results[0].formatted_address;
}
