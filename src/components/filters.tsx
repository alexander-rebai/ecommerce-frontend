import { Color, Size } from "../../types";
import Filter from "./filter";

type FilterProps = {
  sizes: Size[];
  colors: Color[];
};

const Filters = ({ sizes, colors }: FilterProps) => {
  return (
    <div>
      <Filter data={sizes} name="Sizes" valueKey="sizeId" />
      <Filter data={colors} name="Colors" valueKey="colorId" />
    </div>
  );
};

export default Filters;
