import { waitUntil } from "@vercel/functions";

export const GET = async () => {
  waitUntil(
    (async () => {
      console.log("waiting...");
      await new Promise((resolve) => setTimeout(resolve, 11000));
      console.log("done");
    })(),
  );
  return new Response("Hello World!");
};
