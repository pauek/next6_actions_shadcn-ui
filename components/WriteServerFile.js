import { writeFile } from "fs/promises";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function WriteServerFile() {
  async function writeServerFile(formData) {
    "use server";

    const fileText = formData.get("file-text");
    const fileName = formData.get("file-name");
    if (fileText === null || fileName === null) {
      throw new Error(`Missing file-text or file-name`);
    }
    await writeFile(fileName, fileText);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Write Server File</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          action={writeServerFile}
          className="flex flex-col items-stretch gap-2"
        >
          <Input
            type="text"
            placeholder="filename"
            name="file-name"
            className="border"
          />
          <Textarea
            name="file-text"
            placeholder="file contenSt"
            className="border"
          ></Textarea>
          <div className="flex flex-row justify-end">
            <Button variant="secondary">Save</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
