import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchSection = () => {
  return (
    <div className="md:grid md:grid-cols-6 md:pt-20 pb-10 gap-4 items-center">
      <div className=" col-span-3 text-center md:pb-0 pb-5">
        <h1 className="md:text-5xl text-3xl md:pb-5 pb-2">Binge watch now</h1>
        <p className="text-gray-400">
          Search for your favourite anime and start streaming right away!
        </p>
      </div>

      <div className="col-span-2">
        <Input placeholder="Jujutsu Kaisen" />
      </div>
      <div className="mt-5 md:mt-0 text-center">
        <Button variant={"outline"} className="px-10 md:px-5">
          Search
        </Button>
      </div>
    </div>
  );
};
export default SearchSection;
