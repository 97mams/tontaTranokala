import PlateformList from "@/components/plateformList";
import { prisma } from "@/lib/prisma";
import { stringToObject } from "@/lib/urlHelper";

type PlateformParams = {
  params: { plateform: string };
};

export default async function Page({ params }: PlateformParams) {
  const { plateform } = await params;
  const newParams = stringToObject(plateform);
  const plateforms = await prisma.plateform.findMany({
    where: {
      GroupSiteId: Number(newParams.id),
    },
    include: {
      GroupSite: true,
    },
  });

  return (
    <div className="w-full h-[calc(100vh-7rem)]">
      <PlateformList data={plateforms} params={newParams} />
    </div>
  );
}
