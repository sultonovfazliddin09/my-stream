"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import qs from "query-string";

const Search = () => {
  const router = useRouter();
  const [term, setTerm] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!term) return;
    const url = qs.stringifyUrl(
      { url: "/search", query: { term } },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full lg:w-1/3 flex items-center"
    >
      <Input
        placeholder="Search for anything"
        value={term}
        className="rounded-r-none focus-visible:ring-0 shadow-none font-spaceGrotesk"
        onChange={(e) => setTerm(e.target.value)}
      />
      {term && (
        <X
          className="absolute top-2 right-10 size-5 cursor-pointer hover:opacity-75 transition-all"
          onClick={() => setTerm("")}
        />
      )}
      <Button
        type="submit"
        size={"icon"}
        variant={"secondary"}
        className="rounded-l-none"
      >
        <SearchIcon className="size-5 text-muted-foreground" />
      </Button>
    </form>
  );
};

export default Search;
