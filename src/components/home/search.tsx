import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchSection = () => {
  return (
    <div className="grid md:grid-cols-6 pt-20 pb-10 gap-4 items-center">
      <div className=" col-span-3 text-center">
        <h1 className="text-5xl pb-5">Binge watch now</h1>
        <p className="text-gray-400">
          Search for your favourite anime and start streaming right away!
        </p>
      </div>
      <div className="col-span-2">
        <Input placeholder="Jujutsu Kaisen" />
      </div>
      <div>
        <Button variant={"outline"}>Search</Button>
      </div>
    </div>
  );
};
export default SearchSection;
