export default async function Page(props: {
  params: Promise<{ plateform: string }>;
}) {
  const plateform = await props.params;
  return <div>hellow{plateform.plateform}</div>;
}
