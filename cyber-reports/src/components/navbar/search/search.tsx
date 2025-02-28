import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <>
      <button
        type="button"
        className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
      >
        <Search size={20} color="black" />
        <span className="sr-only">Search</span>
      </button>
      <div className="relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search size={20} className=" text-slate-900" />
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          className="block w-56 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
    </>
  );
};
