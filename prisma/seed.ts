import { PrismaClient } from "@prisma/client";

const vehicles = [
  {
    name: "John Deere 8335R",
    price: 1000,
    description:
      "The John Deere 5100M is a 100 HP utility tractor with a 4WD and cab. This is an ideal tractor for small to medium-sized farms, offering reliable performance and a comfortable operating environment.",
    image:
      "https://afbecgmoz6y1ka7w.public.blob.vercel-storage.com/vehicles/tractors/john-deere-wHFUZtKtkx2fZfVhJeThur8JhQUkqu.png",
    specifications: {
      engine: "100HP",
      fuel: "Diesel",
      transmission: "12F/12R",
      drive: "4WD",
      cabin: "A/C",
      weight: "3,500 kg",
    },
    rentalTerms: {
      delivery: 1,
      insurance: 1,
      deposit: "Aadhar Card / Credit Card Hold",
      cleaning: 1,
      "min-rental": "1",
      "fuel-policy": "Full to Full",
    },
  },
  {
    name: "Agco DT275B",
    price: 1200,
    description:
      "The Agco DT275B is a 275 HP tractor with a 4WD and cab. This is a high-performance tractor suitable for large farms and heavy-duty applications.",
    image:
      "https://afbecgmoz6y1ka7w.public.blob.vercel-storage.com/vehicles/tractors/agco-m5C3VSDQLvGxwOshP8UYzDIwzj2gWa.png",
    specifications: {
      engine: "275HP",
      fuel: "Diesel",
      transmission: "16F/4R",
      drive: "4WD",
      cabin: "A/C",
      weight: "7,500 kg",
    },
    rentalTerms: {
      delivery: 1,
      insurance: 1,
      deposit: "Aadhar Card / Credit Card Hold",
      cleaning: 1,
      "min-rental": "1",
      "fuel-policy": "Full to Full",
    },
  },
  {
    name: "Agrotron 7250 TTV",
    price: 1300,
    description:
      "The Agrotron 7250 TTV is a 250 HP tractor with a 4WD and cab.",
    image:
      "https://afbecgmoz6y1ka7w.public.blob.vercel-storage.com/vehicles/tractors/agrotron-AHLpoBKGT80HCMuHxpkrIr9AioycFv.png",
    specifications: {
      engine: "250HP",
      fuel: "Diesel",
      transmission: "16F/4R",
      drive: "4WD",
      cabin: "A/C",
      weight: "6,500 kg",
    },
    rentalTerms: {
      delivery: 1,
      insurance: 1,
      deposit: "Aadhar Card / Credit Card Hold",
      cleaning: 1,
      "min-rental": "1",
      "fuel-policy": "Full to Full",
    },
  },
  {
    name: "Challenger MT875E",
    price: 1400,
    description:
      "The Challenger MT875E is a 500 HP tractor with a 4WD and cab.",
    image:
      "https://afbecgmoz6y1ka7w.public.blob.vercel-storage.com/vehicles/tractors/challenger-W8Ll21TjK2lkC2GQfCdYG0lSzcYSld.png",
    specifications: {
      engine: "500HP",
      fuel: "Diesel",
      transmission: "16F/4R",
      drive: "4WD",
      cabin: "A/C",
      weight: "10,000 kg",
    },
    rentalTerms: {
      delivery: 1,
      insurance: 1,
      deposit: "Aadhar Card / Credit Card Hold",
      cleaning: 1,
      "min-rental": "1",
      "fuel-policy": "Full to Full",
    },
  },
  {
    name: "Deltatrack 570",
    price: 1500,
    description: "The Deltatrack 570 is a 570 HP tractor with a 4WD and cab.",
    image:
      "https://afbecgmoz6y1ka7w.public.blob.vercel-storage.com/vehicles/tractors/deltatrack-Z1x35FahTnyTi2K5IyAjZM6yZL0YJ7.png",
    specifications: {
      engine: "570HP",
      fuel: "Diesel",
      transmission: "16F/4R",
      drive: "4WD",
      cabin: "A/C",
      weight: "12,000 kg",
    },
    rentalTerms: {
      delivery: 1,
      insurance: 1,
      deposit: "Aadhar Card / Credit Card Hold",
      cleaning: 1,
      "min-rental": "1",
      "fuel-policy": "Full to Full",
    },
  },
  {
    name: "Ferguson 5710",
    price: 1600,
    description: "The Ferguson 5710 is a 110 HP tractor with a 4WD and cab.",
    image:
      "https://afbecgmoz6y1ka7w.public.blob.vercel-storage.com/vehicles/tractors/ferguson-gH7LNQBcowYZWbVMFK4RexkctqZ5Lc.png",
    specifications: {
      engine: "110HP",
      fuel: "Diesel",
      transmission: "12F/12R",
      drive: "4WD",
      cabin: "A/C",
      weight: "3,500 kg",
    },
    rentalTerms: {
      delivery: 1,
      insurance: 1,
      deposit: "Aadhar Card / Credit Card Hold",
      cleaning: 1,
      "min-rental": "1",
      "fuel-policy": "Full to Full",
    },
  },
  {
    name: "Kuboto M7-171",
    price: 1700,
    description: "The Kuboto M7-171 is a 170 HP tractor with a 4WD and cab.",
    image:
      "https://afbecgmoz6y1ka7w.public.blob.vercel-storage.com/vehicles/tractors/kuboto-ebRraCjMVectmQfEzjdvAjSbfcyFQh.png",
    specifications: {
      engine: "170HP",
      fuel: "Diesel",
      transmission: "16F/4R",
      drive: "4WD",
      cabin: "A/C",
      weight: "5,500 kg",
    },
    rentalTerms: {
      delivery: 1,
      insurance: 1,
      deposit: "Aadhar Card / Credit Card Hold",
      cleaning: 1,
      "min-rental": "1",
      "fuel-policy": "Full to Full",
    },
  },
  {
    name: "Magnum 380",
    price: 1800,
    description: "The Magnum 380 is a 380 HP tractor with a 4WD and cab.",
    image:
      "https://afbecgmoz6y1ka7w.public.blob.vercel-storage.com/vehicles/tractors/magnum-jnixXhB8t7BOenfjY5LUXHNZY7Aetv.png",
    specifications: {
      engine: "380HP",
      fuel: "Diesel",
      transmission: "16F/4R",
      drive: "4WD",
      cabin: "A/C",
      weight: "8,500 kg",
    },
    rentalTerms: {
      delivery: 1,
      insurance: 1,
      deposit: "Aadhar Card / Credit Card Hold",
      cleaning: 1,
      "min-rental": "1",
      "fuel-policy": "Full to Full",
    },
  },
  {
    name: "New Holland T8.410",
    price: 1900,
    description:
      "The New Holland T8.410 is a 410 HP tractor with a 4WD and cab.",
    image:
      "https://afbecgmoz6y1ka7w.public.blob.vercel-storage.com/vehicles/tractors/new-holland-nxd3uR8RP8j6jkRNYvbKqrajvBCbFq.png",
    specifications: {
      engine: "410HP",
      fuel: "Diesel",
      transmission: "16F/4R",
      drive: "4WD",
      cabin: "A/C",
      weight: "9,500 kg",
    },
    rentalTerms: {
      delivery: 1,
      insurance: 1,
      deposit: "Aadhar Card / Credit Card Hold",
      cleaning: 1,
      "min-rental": "1",
      "fuel-policy": "Full to Full",
    },
  },
  {
    name: "Yanmar YT359",
    price: 2000,
    description: "The Yanmar YT359 is a 59 HP tractor with a 4WD and cab.",
    image:
      "https://afbecgmoz6y1ka7w.public.blob.vercel-storage.com/vehicles/tractors/yanmar-SUE1Bj16RdrNEmdMVdpCyZJKDOffOl.png",
    specifications: {
      engine: "59HP",
      fuel: "Diesel",
      transmission: "12F/12R",
      drive: "4WD",
      cabin: "A/C",
      weight: "2,500 kg",
    },
    rentalTerms: {
      delivery: 1,
      insurance: 1,
      deposit: "Aadhar Card / Credit Card Hold",
      cleaning: 1,
      "min-rental": "1",
      "fuel-policy": "Full to Full",
    },
  },
];

const seed = async () => {
  console.log("Seeding vehicles...");
  const prisma = new PrismaClient();

  for (const vehicle of vehicles) {
    await prisma.vehicle.create({
      data: {
        name: vehicle.name,
        pricePerDay: vehicle.price,
        images: [vehicle.image],
        description: vehicle.description,
        number: "1",
        type: "TRACTOR",
        rentalTerms: vehicle.rentalTerms,
        specifications: vehicle.specifications,
        userId: "clvg334pi0000db2b3t39tjtx",
      },
    });
  }

  await prisma.$disconnect();
};

seed();
