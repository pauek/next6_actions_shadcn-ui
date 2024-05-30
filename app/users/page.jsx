import User from "@/components/User";
import { loadUsers } from "@/lib/users";

export const metadata = {
  title: "Users Page - NextJS Demo",
  description:
    "A simple demo of the basic features of NextJS and React",
};

export default async function Page() {
  const users = await loadUsers(15);
  return (
    <main className="p-2">
      <h1>Users page</h1>
      {users.map((user) => (
        <User
          key={user.email}
          user={user}
        />
      ))}
    </main>
  );
}
