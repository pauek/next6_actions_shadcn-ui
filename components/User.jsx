/* React component: a function that receives
a single object parameter called "props" 
that returns a piece of JSX */

import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";

export default function User({ user }) {
  const { picture, name, email, login } = user;
  return (
    <Link href={`/users/${login.username}`}>
      <div className="border-2 p-1 px-2 rounded mb-1 flex flex-row gap-2 items-center">
        <Avatar>
          <AvatarImage
            src={picture.thumbnail}
            alt="User avatar"
          />
          <AvatarFallback>
            {name.first[0]}
            {name.last[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-bold leading-5">
            {name.first} {name.last}
          </h3>
          <p className="font-mono text-xs text-gray-500">
            {email} ({login.username})
          </p>
        </div>
      </div>
    </Link>
  );
}
