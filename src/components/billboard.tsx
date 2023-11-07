import type { Billboard as BillboardType } from "../../types";

export const revalidate = 0;

const Billboard = ({ data }: { data: BillboardType }) => {
  return (
    <div className="p-4 md:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl md:text-5xl lg:text-6xl md:max-w-xs lg:max-w-xs xl:max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
