import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import type { UserPayload } from "@prisma/client";

import { useLoaderData } from "@remix-run/react";

import prisma from "~/services/db";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const id = "clqzhivij0000r0j5pl7vyw73";
  const data = await prisma.user.findUnique({ where: { id } });
  console.log(data);
  return data;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-blue-600 text-8xl">Welcomes to Remix</h1>
      <ul className="text-red-500">
        <li>15m Quickstart Blog Tutorial {data?.email}</li>
      </ul>
    </div>
  );
}
