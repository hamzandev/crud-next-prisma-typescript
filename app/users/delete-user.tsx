"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type User = {
  id: Number;
  name: String;
  username: String;
  email: String;
  age: Number;
  addres: String;
};

export default function DeleteUser({ user }: { user: User }) {
  const [isMuted, setIsMuted] = useState(true);
  const [modal, setModal] = useState(false);
  const router = useRouter();

  async function handleCLick() {
    setIsMuted(false);
    await fetch(`${process.env.API_BASE_URL}/users?id=${user.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsMuted(true);
    router.refresh();
  }
  return (
    <div>
      <button
        disabled={!isMuted}
        onClick={() => setModal(!modal)}
        className={`btn btn-error btn-sm px-4 ${isMuted == false && "loading"}`}
      >
        Delete
      </button>
      <input type="checkbox" checked={modal} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-2xl font-bold">Confirm Delete</h3>
          <span>Are you sure to delete {user.username} ?</span>
          <div className="modal-action">
            <button onClick={() => setModal(!modal)} className="btn">
              Cancel
            </button>
            <button onClick={handleCLick} className="btn btn-primary">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
