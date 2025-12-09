"use client";

import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function CardCounterUser({
  count,
  title,
}: {
  count: number;
  title: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(count);
  }, [count]);

  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardContent>
        <AnimatedNumber
          className="inline-flex items-center font-mono text-2xl font-light text-zinc-800 dark:text-zinc-50"
          springOptions={{
            bounce: 0,
            duration: 2000,
          }}
          value={value}
        />
      </CardContent>
    </Card>
  );
}
