import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

const SearchBtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button variant={"outline"} disabled={pending}>
      {pending ? "Searching..." : "Search"}
    </Button>
  );
};

export default SearchBtn;
