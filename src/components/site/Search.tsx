"use cilent";

import { SearchResult } from "@/types/searchResult";
import { useState } from "react";
import { SearchForm } from "./SearchForm";
import * as api from "@/api/site";
import { SearchReveal } from "./SearchReveal";
import { loadBindings } from "next/dist/build/swc";

type Props = {
  id: number;
};

export const Search = ({ id }: Props) => {
  const [results, setResults] = useState<SearchResult>();
  const [loading, setLoading] = useState(false);

  const handleSearchButton = async (doc: string) => {
    if (!doc) return;

    setLoading(true);
    const result = await api.searchDoc(id, doc);
    setLoading(false);
    if (!result) return alert("OOPS! Seu CPF não foi encontrado!");

    setResults(result);
  };

  return (
    <section className="bg-grey-900 p-5 rounded">
      {!results && <SearchForm loading={loading} onSearchButton={handleSearchButton} />}
      {results && <SearchReveal results={results} />}
    </section>
  );
};
