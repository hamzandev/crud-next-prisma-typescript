import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function UserDetail({
  params,
}: {
  params: { username: String };
}) {
  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold">{params.username}</h3>
    </div>
  );
}
