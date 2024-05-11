"use client";

import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleInputChange = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Input
      className="bg-gray-300 border-0 text-black font-semibold md:text-2xl text-lg"
      onChange={(e) => handleInputChange(e.target.value)}
      defaultValue={searchParams.get("query")?.toString()}
      name="query"
      placeholder="Enter your anime"
    />
  );
};

export default SearchBar;
