import GetServerDate from "@/components/GetServerDate";
import WriteServerFile from "@/components/WriteServerFile";

export default function Page() {
  return (
    <main className="p-4 flex flex-col gap-2">
      <GetServerDate />
      <WriteServerFile />
    </main>
  );
}
