import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="flex flex-col items-center justify-center gap-5">
      <h1>Nimadir neto ketdi ))</h1>
      <Button
        variant="outline"
        asChild
      >
        <Link to="/">
          <span className="text-sm">Go to Home</span>
        </Link>
      </Button>
      </div>
    </div>
  );
};

export default Page;
