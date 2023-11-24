"use client";

import { Plus } from "lucide-react";
import { Color, Size } from "../../types";
import Filter from "./filter";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

type Props = {
  colors: Color[];
  sizes: Size[];
};

const MobileFilters = ({ colors, sizes }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="rounded">
          Filters <Plus size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <Filter data={sizes} name="Sizes" valueKey="sizeId" />
        <Filter data={colors} name="Colors" valueKey="colorId" />
      </SheetContent>
    </Sheet>
  );
};

export default MobileFilters;
