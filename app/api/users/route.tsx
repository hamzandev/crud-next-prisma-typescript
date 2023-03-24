import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const users = await prisma.users.findMany();
  // const data = JSON.stringify(users);
  // return new Response(data);
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  const createUser = await prisma.users.create({ data: body });
  return NextResponse.json({
    message: "User has been created",
    data: createUser,
  });
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const id = Number(request.nextUrl.searchParams.get("id"));
  const updateUser = await prisma.users.update({ data: body, where: { id } });
  return NextResponse.json({
    message: "User has been updated successfuly",
    data: { user: updateUser, id },
  });
}

export async function DELETE(req: NextRequest) {
  const id = Number(req.nextUrl.searchParams.get("id"));
  const deleteUser = await prisma.users.delete({ where: { id } });
  return NextResponse.json({
    message: `User ${id} has been deleted successfuly!`,
    data: { user: deleteUser, id },
  });
}
