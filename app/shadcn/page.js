import { AlertDialogDemo } from "@/components/AlertDialogDemo";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Home() {
  return (
    <main className="p-2 flex flex-col h-screen justify-center items-center">
      <AlertDialogDemo />

      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <Button variant="link">Show card</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="text-xs">
            Occaecat duis occaecat eu qui voluptate pariatur
            irure nostrud ullamco adipisicing. Esse eiusmod
            ex pariatur minim ullamco laboris in labore
            commodo ipsum ipsum nulla ad sint. Cupidatat
            ullamco excepteur eu quis aliqua laborum est et.
          </p>
        </HoverCardContent>
      </HoverCard>
    </main>
  );
}
