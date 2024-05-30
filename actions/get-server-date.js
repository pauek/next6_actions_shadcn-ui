"use server";

export async function actionGetServerDate() {
    const now = new Date();
    return { serverDate: now };
}

