import { SearchResult } from "@/types/searchResult"

type Props = {
    results: SearchResult;
}

export const SearchReveal = ({results}: Props) => {

    return (
        <div>
            <p className="text-3xl">{results.person.name}</p>
            <p className="text-sxl my-3">parabens, você tirou</p>
            <p className="text-4xl bg-blue-500 my-5 px-5 py-20 rounded-lg border-dashed border-blue-300">{results.personMatched.name}</p>
        </div>
    );
}