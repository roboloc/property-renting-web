import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="mx-auto mt-7 mb-3 w-full max-w-4xl px-4 sm:max-w-xl md:max-w-3xl">
      <h2 className="mt-2 mb-2 text-lg font-semibold">Order History</h2>
      {/* <div className="flex items-center justify-start gap-4">
        <Input type="search" placeholder="Search orders..." className="w-64" />
      </div> */}
    </div>
  );
};

export default SearchBar;
