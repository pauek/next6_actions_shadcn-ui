import { loadUserByUsername, loadUsers } from "@/lib/users";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { username } = params;
  const user = await loadUserByUsername(username);
  if (user === null) {
    notFound();
  }

  const {
    name,
    picture,
    location,
    login,
    email,
    dob: { age },
  } = user;

  return (
    <div className="relative">
      <main className="p-4">
        <Link
          href="/users"
          className="flex flex-row items-center text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path
              fill="currentColor"
              d="m9 18l-6-6l6-6l1.4 1.4L6.8 11H21v2H6.8l3.6 3.6z"
            />
          </svg>
          Back
        </Link>
        <h1>
          {name.first} {name.last}
        </h1>
        <Image
          src={picture.large}
          width={150}
          height={150}
          alt="User picture"
          className="rounded-full mb-4"
        />
        <table>
          <tbody>
            <tr>
              <td>
                <span className="font-bold mr-3">
                  Username:
                </span>
              </td>
              <td>{login.username}</td>
            </tr>
            <tr>
              <td>
                <span className="font-bold mr-3">
                  Email:
                </span>
              </td>
              <td>
                <span className="font-mono">{email}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="font-bold mr-3">
                  Address:
                </span>
              </td>
              <td>
                {location.street.name}{" "}
                {location.street.number}, {location.city},{" "}
                {location.country}
              </td>
            </tr>
            <tr>
              <td>
                <span className="font-bold mr-3">Age:</span>
              </td>
              <td>{age}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const allUsers = await loadUsers(15);
  return allUsers.map((user) => ({
    username: user.login.username,
  }));
}
