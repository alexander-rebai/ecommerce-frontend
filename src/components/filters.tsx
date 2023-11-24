"use client";

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useState } from "react";
import { Color, Size } from "../../types";
import Filter from "./filter";
import { Button } from "./ui/button";

type FilterProps = {
  sizes: Size[];
  colors: Color[];
};

export type FilterValues = {
  sizeId?: string;
  colorId?: string;
};

const Filters = ({ sizes, colors }: FilterProps) => {
  const [filterValues, setFilterValues] = useState<FilterValues>({});
  const router = useRouter();

  const applyFilters = () => {
    const currentQuery = queryString.parse(window.location.search);

    const query = {
      ...currentQuery,
      ...filterValues,
    };

    const url = queryString.stringifyUrl(
      {
        url: window.location.pathname,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const clearFilters = () => {
    setFilterValues({});

    router.push(window.location.pathname);
  };

  return (
    <div>
      <Filter
        data={sizes}
        name="Sizes"
        valueKey="sizeId"
        setFilterValues={setFilterValues}
        filterValues={filterValues}
      />
      <Filter
        data={colors}
        name="Colors"
        valueKey="colorId"
        setFilterValues={setFilterValues}
        filterValues={filterValues}
      />
      <div className="flex flex-col gap-2">
        <Button onClick={applyFilters}>Apply filters</Button>
        <Button variant="outline" onClick={clearFilters}>
          Clear filters
        </Button>
      </div>
    </div>
  );
};

export default Filters;
