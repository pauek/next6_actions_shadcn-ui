"use client";

import { actionGetServerDate } from "@/actions/get-server-date";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function GetServerDate() {
  const [date, setDate] = useState(null);

  const getDate = async () => {
    const { serverDate } = await actionGetServerDate();
    console.log(serverDate);
    setDate(serverDate);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get Server Date</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          {date === null
            ? "no date"
            : date.toLocaleString()}
        </p>
        <div className="flex flex-row gap-4">
          <Button variant="secondary" onClick={getDate}>
            Get Server Date
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
