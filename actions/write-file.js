"use server";

import { writeFile } from "fs/promises"

export async function actionWriteServerFile(formData) {
    const fileText = formData.get("file-text");
    const fileName = formData.get("file-name");
    if (fileText === null || fileName === null) {
        throw new Error(`Missing file-text or file-name`);
    }
    await writeFile(fileName, fileText);
}