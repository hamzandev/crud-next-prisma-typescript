"use client";

import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddUser() {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [age, setAge] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  async function handleChange(e: any) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setIsSubmit(!isSubmit);
    const newAge = Number(age);
    await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, age: newAge }),
    });
    setUser({});
    setIsSubmit(false);
    router.push("/users");
  }

  return (
    <div className="container mx-auto py-3">
      <h3 className="font-bold text-3xl text-center">Add New User</h3>
      <div className="grid mx-auto w-4/12 my-5">
        <form onSubmit={handleSubmit} className="grid gap-5 relative">
          <div
            className={`${
              isSubmit == true ? "block" : "hidden"
            } bg-gray-700/80 rounded-md w-full h-full absolute`}
          ></div>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter name of user"
          />
          <input
            onChange={handleChange}
            name="username"
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter username"
          />
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter email address"
          />
          <input
            onChange={(e: SyntheticEvent) => setAge(e.target.value)}
            name="age"
            type="number"
            className="input input-bordered w-full"
            placeholder="Enter Age of user"
          />
          <input
            onChange={handleChange}
            name="address"
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter Address"
          />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
          <Link href={"/users"} className="btn btn-outline">
            Kembali
          </Link>
        </form>
      </div>
    </div>
  );
}
