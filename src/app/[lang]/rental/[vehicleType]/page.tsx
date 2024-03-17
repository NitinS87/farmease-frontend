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
  const vehicles = [
    "tractors",
    "harvesters",
    "trucks",
    "combines",
    "trailers",
    "cultivators",
    "ploughs",
    "planters",
  ];

  return vehicles.map((vehicle) => ({
    vehicleType: vehicle,
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
  const fetchedVehicles = [
    {
      id: 1,
      name: "John Deere 8335R",
      price: 1000,
      image: JohnDeere,
    },
    {
      id: 2,
      name: "Agco DT275B",
      price: 1200,
      image: Agco,
    },
    {
      id: 3,
      name: "Agrotron 7250 TTV",
      price: 1300,
      image: Agrotron,
    },
    {
      id: 4,
      name: "Challenger MT875E",
      price: 1400,
      image: Challenger,
    },
    {
      id: 5,
      name: "Deltatrack 570",
      price: 1500,
      image: Deltatrack,
    },
    {
      id: 6,
      name: "Ferguson 5710",
      price: 1600,
      image: Ferguson,
    },
    {
      id: 7,
      name: "Kuboto M7-171",
      price: 1700,
      image: Kuboto,
    },
    {
      id: 8,
      name: "Magnum 380",
      price: 1800,
      image: Magnum,
    },
    {
      id: 9,
      name: "New Holland T8.410",
      price: 1900,
      image: NewHolland,
    },
    {
      id: 10,
      name: "Yanmar YT359",
      price: 2000,
      image: Yanmar,
    },
  ];

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
            src={vehicle.image}
            alt={vehicle.name}
            className="object-cover rounded-lg"
            placeholder="blur"
          />
          <h3 className="text-base md:text-lg font-semibold text-center">
            {vehicle.name}
          </h3>
          <p className="text-sm">
            ₹{vehicle.price}
            {vehicles["price"]}
          </p>
        </CustomLink>
      ))}
    </section>
  );
};

export default AllVehicle;
