import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-4">
      <h1>This is an protected route</h1>
      <UserButton />
    </div>
  );
}
