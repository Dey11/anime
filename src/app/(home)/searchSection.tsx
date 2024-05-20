import SearchForm from "../../components/custom-ui/searchForm";

const SearchSection = () => {
  return (
    <div className="items-center gap-4 pb-10 md:grid md:grid-cols-6 md:pt-20">
      <div className=" col-span-3 pb-5 text-center md:pb-0">
        <h1 className="pb-2 text-3xl md:pb-5 md:text-5xl">Binge watch now</h1>
        <p className="text-gray-400">
          Search for your favourite anime and start streaming right away!
        </p>
      </div>
      <SearchForm className="search" />
    </div>
  );
};
export default SearchSection;
