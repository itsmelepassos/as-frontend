"use cilent";

import { escapeDoc } from "@/utils/escapeDoc";
import { useState } from "react";

type Props = {
  onSearchButton: (doc: string) => void;
  loading: boolean;
};

export const SearchForm = ({ onSearchButton, loading }: Props) => {
  const [docInput, setDocInput] = useState("");

  return (
    <div>
      <p className="mb-3 text-xl">Qual seu CPF?</p>
      <input
        type="text"
        inputMode="numeric"
        placeholder="Digite seu CPF"
        className="w-full p-3 bg-white text-black text-center outline-none rounded-lg disabled:opacity-50"
        autoFocus
        value={docInput}
        onChange={event => setDocInput(escapeDoc(event.target.value))}
        disabled={loading}
      />
      <button
        className="w-full p-3 mt-3 rounded-lg bg-blue-500 text-white text-4xl border-b-4 border-blue-600 active:border-0 disabled:opacity-50"
        onClick={() => onSearchButton(docInput)}
        disabled={loading}
      >
        {loading ? 'Buscando...' : 'Entrar'}
      </button>
    </div>
  );
};
