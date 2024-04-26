import Search from "@/components/search";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";
import React, { Suspense } from "react";
import JohnDeere from "../../../../../public/rental/vehicles/tractors/john-deere.png";
import Agco from "../../../../../public/rental/vehicles/tractors/agco.png";
import Agrotron from "../../../../../public/rental/vehicles/tractors/agrotron.png";
import Challenger from "../../../../../public/rental/vehicles/tractors/challenger.png";
import Deltatrack from "../../../../../public/rental/vehicles/tractors/deltatrack.png";
import Ferguson from "../../../../../public/rental/vehicles/tractors/ferguson.png";
import Kuboto from "../../../../../public/rental/vehicles/tractors/kuboto.png";
import Magnum from "../../../../../public/rental/vehicles/tractors/magnum.png";
import NewHolland from "../../../../../public/rental/vehicles/tractors/new-holland.png";
import Yanmar from "../../../../../public/rental/vehicles/tractors/yanmar.png";
import Image from "next/image";
import CustomLink from "@/components/custom-link";
import { Metadata, ResolvingMetadata } from "next";
import { VehiclesSkeleton } from "./loading";
import { getAllVehiclesOfCategory, getVehicileCategories } from "@/utils/db";

type Props = {
  params: {
    vehicleType: string;
    lang: Locale;
  };
  searchParams?: {
    query?: string;
    page?: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL("https://farmease-frontend.vercel.app/"),
    title:
      params.vehicleType.charAt(0).toUpperCase() + params.vehicleType.slice(1),
    openGraph: {
      images: [
        "../../../../../public/rental/vehicles/tractors/john-deere.png",
        ...previousImages,
      ],
    },
  };
}

export async function generateStaticParams() {
  const vehicles = await getVehicileCategories();

  return vehicles.map((vehicle) => ({
    vehicleType: vehicle.type,
  }));
}
const AllVehicle = async ({ params, searchParams }: Props) => {
  const { vehicles } = await getDictionary(params.lang);
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";
  // console.log(searchParams, params.vehicleType, params.lang);

  // @ts-ignore
  const name = vehicles[params.vehicleType];

  return (
    <main className="container flex flex-col items-start my-4 p-4 gap-5 lg:gap-8 justify-start w-full">
      <div className="space-y-3">
        <h1 className="text-xl lg:text-3xl font-semibold">{name}</h1>
        <h5>
          {vehicles["subtitle-1"]}&nbsp;
          {params.vehicleType}&nbsp;{vehicles["subtitle-2"]}
        </h5>
      </div>
      <Search
        placeholder={`${vehicles.search} ${params.vehicleType.toLowerCase()}`}
      />
      <Suspense fallback={<VehiclesSkeleton />} key={query + currentPage}>
        <Vehicles params={params} searchParams={searchParams} />
      </Suspense>
    </main>
  );
};

const Vehicles: React.FC<Props> = async ({ params, searchParams }) => {
  const { vehicles } = await getDictionary(params.lang);
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";
  // console.log(searchParams, params.vehicleType, params.lang);

  // @ts-ignore
  const name = vehicles[params.vehicleType];
  const fetchedVehicles = await getAllVehiclesOfCategory(
    params.vehicleType,
    currentPage,
    query
  );

  const filterQuery = searchParams?.query || "";
  const filteredVehicles = filterQuery
    ? fetchedVehicles.filter((vehicle) =>
        vehicle.name.toLowerCase().includes(filterQuery.toLowerCase())
      )
    : fetchedVehicles;

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8 w-full">
      {filteredVehicles.map((vehicle) => (
        <CustomLink
          href={`/${params.lang}/rental/${params.vehicleType}/${vehicle.id}`}
          lang={params.lang}
          key={vehicle.id}
          className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md"
        >
          <Image
            src={vehicle.images[0]}
            alt={vehicle.name}
            width={300}
            height={200}
            className="object-cover rounded-lg"
            // placeholder="blur"
          />
          <h3 className="text-base md:text-lg font-semibold text-center">
            {vehicle.name}
          </h3>
          <p className="text-sm">
            ₹{vehicle.pricePerDay}
            {vehicles["price"]}
          </p>
        </CustomLink>
      ))}
    </section>
  );
};

export default AllVehicle;
