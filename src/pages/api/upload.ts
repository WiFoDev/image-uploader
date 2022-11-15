// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";

import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post((req, res) => {
  return res.status(200).json("Hello World");
});

export default handler;
