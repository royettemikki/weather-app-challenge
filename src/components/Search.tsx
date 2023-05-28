import { request } from "../utils/request";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const city = formData.get("city")?.valueOf();

    const result = await request({
      method: "post",
      city,
    });

    switch (result.cod) {
      case 200:
        navigate(`/${result.id}`, { state: result });
        break;
      default:
        setErrorMessage(result.message);
        break;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            name="city"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-stone-500 focus:border-stone-500 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500"
            placeholder="Search your city"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-stone-700 focus:ring-4 focus:outline-none focus:ring-stone-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
          >
            Search
          </button>
        </div>
      </form>
      <span className="text-red-800 text-base w-full flex justify-center italic">
        {errorMessage}
      </span>
    </>
  );
};

export default Search;
