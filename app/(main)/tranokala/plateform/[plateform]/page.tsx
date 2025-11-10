import { PlateformForm } from "@/components/plateformForm";
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
    <div className="w-full h-[calc(100vh-7rem)] overflow-auto">
      <h1 className="uppercase text-4xl text-center md:text-start font-extrabold tracking-tight text-balance">
        {newParams.title}
      </h1>
      {plateforms.length !== 0 ? (
        <p className="leading-7 text-center md:text-start [&:not(:first-child)]:mt-6">
          Ici, retrouvez tous les plateforms dédiés à {newParams.title}.
        </p>
      ) : (
        ""
      )}
      {plateforms.length === 0 ? (
        <EmptyData id={Number(newParams.id)} />
      ) : (
        <PlateformList data={plateforms} params={newParams} />
      )}
    </div>
  );
}

const EmptyData = ({ id }: { id: number }) => {
  return (
    <div className="w-[calc(100%-20rem)] h-[calc(100vh-7rem)] flex flex-col justify-center items-center">
      <p className="text-muted-foreground mb-8">
        🔑 Ton coffre-fort numérique commence avec un enregistrement.
      </p>
      <PlateformForm id={id} isButton={true} />
    </div>
  );
};
