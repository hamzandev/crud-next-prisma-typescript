"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

type User = {
  id: Number;
  name: "";
  username: "";
  email: "";
  age: Number;
  address: "";
};

export default function UpdateUser({ user }: { user: User }) {
  const [userState, setUserState] = useState({ ...user });
  const [age, setAge] = useState(0);
  const [modal, setModal] = useState(false);
  const [isMuted, setMuted] = useState(false);

  const router = useRouter();

  async function handleChange(e: any) {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    });

    console.log({ userState });
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setMuted(true);
    // alert(JSON.stringify(userState));
    await fetch(`/api/users?id=${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userState, age }),
    });

    setModal(false);
    setMuted(false);
    router.push("/users");
  }
  return (
    <div>
      <button onClick={() => setModal(!modal)} className="btn btn-info btn-sm">
        Update
      </button>
      <input type="checkbox" checked={modal} className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          <h3 className="text-2xl font-bold mb-5">Edit User</h3>
          <form onSubmit={handleSubmit} className="grid gap-3">
            <div className="grid">
              <input
                onChange={handleChange}
                type="text"
                name="name"
                value={user.name + " test"}
                className="input input-bordered w-full"
                placeholder="Enter name of user"
              />
            </div>
            <div className="grid">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                value={user.username}
                className="input input-bordered"
              />
            </div>
            <div className="grid">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={user.email}
                className="input input-bordered"
              />
            </div>
            <div className="grid">
              <input
                type="number"
                name="age"
                onChange={(e: any) => setAge(e.target.value)}
                value={Number(user.age)}
                className="input input-bordered"
              />
            </div>
            <div className="grid">
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={user.address}
                className="input input-bordered"
              />
            </div>
            <div className="modal-action">
              <button
                type="button"
                onClick={() => setModal(!modal)}
                className="btn"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isMuted}
                className={`btn btn-primary ${isMuted && "loading"}`}
              >
                Save Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
