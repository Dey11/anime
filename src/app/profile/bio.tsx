import { Textarea } from "@/components/ui/textarea";

const BioComponent = () => {
  return (
    <Textarea
      placeholder="Tell us a bit about yourself..."
      className="rounded-2xl dark:border-0 dark:bg-white dark:text-black"
    />
  );
};

export default BioComponent;
