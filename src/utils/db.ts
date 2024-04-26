import { VehicleType } from "@prisma/client";
import prisma from "./prisma";

const getUserFromDb = async (emailOrPhone: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email: emailOrPhone,
          password,
        },
        {
          phoneNumber: emailOrPhone,
          password,
        },
      ],
    },
  });

  return user;
};

const getVehicileCategories = async () => {
  const categories = await prisma.vehicle.groupBy({
    by: ["type"],
    _min: {
      pricePerDay: true,
    },
  });

  return categories;
};

const getAllVehiclesOfCategory = async (
  category: string,
  currentPage?: number,
  query?: string
) => {
  const vehicles = await prisma.vehicle.findMany({
    where: {
      type: category.toLocaleUpperCase() as VehicleType,
    },
  });

  return vehicles;
};

const getVehicleById = async (id: string) => {
  const vehicle = await prisma.vehicle.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      pricePerDay: true,
      images: true,
      description: true,
      number: true,
      type: true,
      rentalTerms: true,
      specifications: true,
      userId: true,
      createdAt: true,
    },
  });

  return vehicle;
};

export {
  getUserFromDb,
  getVehicileCategories,
  getAllVehiclesOfCategory,
  getVehicleById,
};
