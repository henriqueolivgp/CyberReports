import FiltersComponent from "@/components/explore/filter/filter-reports";
import { Reports } from "@/components/explore/reports/reports";
import { Search } from "@/components/explore/search/search";
import { SortBy } from "@/components/explore/sort-by/sort-by";

export default function Explore() {
  return (
    <>
      <section className="flex flex-col justify-center min-h-screen max-h-full mx-auto ">
        <section className="flex justify-between gap-2 p-8 px-56">
          <Search />
          <SortBy />
          <FiltersComponent  />
        </section>
        <section className="flex justify-center w-full h-full">
          <section className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1  gap-y-8">
            <Reports />
            <Reports />
            <Reports />
            <Reports />
            <Reports />
            <Reports />
            <Reports />
            <Reports />
          </section>
        </section>
      </section>
    </>
  );
}
