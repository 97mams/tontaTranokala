import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function PersonalInfo(props: {
  user: { id: string; name: string; email: string };
}) {
  return (
    <div className="flex gap-4 w-full">
      <Card className="w-full">
        <CardHeader>
          <h2 className="text-lg font-medium">User Information</h2>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <span className="w-full flex justify-around">
              <h3>Name</h3> <p>{props.user.name}</p>{" "}
            </span>
            <span className="w-full flex justify-around">
              <h3>Email</h3> <p>{props.user.email}</p>{" "}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
