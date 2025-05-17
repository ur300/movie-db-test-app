"use client"
import { useCallback, useState } from "react"
import { useDispatch } from "react-redux";
import debounce from "lodash/debounce";
import { XMarkIcon } from '@heroicons/react/16/solid';
import { setSearch } from "@/app/store/search-slice";

export default function MovieSearchPanel() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  
  const debouncedDispatch = useCallback(
    debounce((value: string) => {
      dispatch(setSearch(value))
    }, 300), []);
  
    const handleChange = (value: string) => {
      debouncedDispatch(value)
    }
  
  return (
    <div className="">
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-600 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">Search all movies</div>
          <input
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); handleChange(e.target.value); }}
            name="username"
            id="username"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            placeholder="..." />
          <button type="button" onClick={() => { dispatch(setSearch("")); setQuery(""); }}  disabled={!Boolean(query)}  className="rounded-md bg-white mr-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
              <XMarkIcon width={24} className="text-gray-500"/>
            </button>
        </div>
      </div>
    </div>
  );
}