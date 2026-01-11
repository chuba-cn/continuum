import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button
        variant={"default"}
        size={"lg"}
        className={"w-22 h-14 text-lg py-4 px-8"}
      >
        Button
      </Button>
    </div>
  );
}
