"use client";

import { cn } from "@/lib/utils";
import { Color, Size } from "../../types";
import { FilterValues } from "./filters";
import { Button } from "./ui/button";

type FilterProps = {
  data: (Size | Color)[];
  name: string;
  valueKey: "sizeId" | "colorId";
  setFilterValues: React.Dispatch<React.SetStateAction<FilterValues>>;
  filterValues?: FilterValues;
};

const Filter = ({
  data,
  name,
  valueKey,
  setFilterValues,
  filterValues,
}: FilterProps) => {
  const isSelected = (id: string) => {
    return filterValues?.[valueKey] === id;
  };

  const onClick = (id: string) => {
    setFilterValues((prevValues) => {
      const updatedValues = { ...prevValues, [valueKey]: id };

      if (prevValues[valueKey] === id) {
        delete updatedValues[valueKey];
      }

      return updatedValues;
    });
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex item-center">
            <Button
              className={cn(
                "rounded-md text-sm text-primary p-2 bg-white border border-muted-foreground hover:text-white",
                isSelected(filter.id) && "bg-primary text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
