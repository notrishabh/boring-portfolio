import Link from "next/link";
import { Button } from "./ui/button";
import { CirclePlus } from "lucide-react";
import CopyEmailButton from "./copyemail";

export default function WorkTogether() {
  return (
    <div className="p-8 flex flex-col justify-center items-center space-y-2">
      <h1 className="text-2xl font-bold text-white">
        Let&apos;s work together.
      </h1>
      <p>Creating awesome user experiences</p>
      <div className="flex gap-4 items-center pt-2">
        <Button
          asChild
          size="sm"
          className="p-2 text-xs font-semibold bg-secondbg text-white rounded-md hover:bg-medbg"
        >
          <Link href="/contact">
            <CirclePlus />
            Hire Me
          </Link>
        </Button>
        <CopyEmailButton />
      </div>
    </div>
  );
}
