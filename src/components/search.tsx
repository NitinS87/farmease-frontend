"use client";
import React, { FC } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

type SearchProps = {
  placeholder: string;
};

const Search: FC<SearchProps> = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="p-3 flex items-center space-x-2 border rounded-lg w-full bg-primary/10">
      <MagnifyingGlassIcon height={26} width={26} />
      <input
        placeholder={placeholder}
        className="border-none outline-none focus-visible:ring-0 bg-transparent w-full"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default Search;
