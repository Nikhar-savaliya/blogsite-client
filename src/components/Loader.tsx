import { LoaderIcon } from "lucide-react";

const Loader = () => {
  return (
    <div className=" h-cover flex items-center justify-center">
      <LoaderIcon className="w-6 h-6 text-muted-foreground animate-spin" />
    </div>
  );
};

export default Loader;
