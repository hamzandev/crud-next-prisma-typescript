import Link from "next/link";
import DeleteUser from "./delete-user";
import UpdateUser from "./update-user";

export default async function Users() {
  const users = await getUsers();
  return (
    <div className="container mx-auto py-3">
      <div className="flex justify-between items-center md:mx-0 mx-5">
        <h3 className="text-3xl font-bold">Users Page</h3>
        <Link href={`/users/new`} className="btn btn-secondary text-white px-6">
          New user
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 my-10 md:mx-0 mx-5">
        {users.map((user: any) => (
          <div key={user.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>{user.email}</p>
              <span>{user.address}</span>
              <div className="card-actions justify-end">
                {/* <Link
                  href={`/users/${user.username}`}
                  className="btn btn-sm btn-primary"
                >
                  Detail
                </Link> */}
                <UpdateUser user={user} />
                <DeleteUser user={user} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function getUsers() {
  const res = await fetch(`${process.env.API_BASE_URL}/users`, {
    cache: "no-store",
  });
  const { data } = await res.json();
  return data;
}
