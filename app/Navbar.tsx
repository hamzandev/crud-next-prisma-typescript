import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container mx-auto navbar w-screen bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Homepage</Link>
            </li>
            <li>
              <Link href={"/users"}>Users</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">HamzanDev</a>
      </div>
      <div className="navbar-end">
        <Link
          href={"https://wa.me/6283129535479?text=Assalamualaikum+mas+wahyu"}
          target="_blank"
        >
          <button className="btn btn-primary btn-sm">Donate</button>
        </Link>
      </div>
    </div>
  );
}
