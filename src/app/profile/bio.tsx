import { Textarea } from "@/components/ui/textarea";
import { PenLine } from "lucide-react";

const BioComponent = () => {
  return (
    <div className="relative">
      <Textarea
        placeholder="Tell us a bit about yourself..."
        className="rounded-2xl pl-10 dark:border-0 dark:bg-white dark:text-black"
      />
      <PenLine className="absolute left-0 top-0 ml-2 mt-2" />
    </div>
  );
};

export default BioComponent;
