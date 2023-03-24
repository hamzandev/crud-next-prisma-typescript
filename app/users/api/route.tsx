import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const users = await prisma.users.findMany();
  return NextResponse.json({
    message: "success get all users",
    data: users,
  });
}

export async function POST(req: NextRequest) {
  const body = {
    name: "asdhasd",
    username: "asdhasd",
    email: "asdhasd",
    age: 19,
    address: "asdadasd",
  };
  const createUser = prisma.users.create({ body });
  return NextResponse.json({
    message: "success get all users",
    //   data: users,
    body: createUser,
  });
}
