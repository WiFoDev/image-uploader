// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";

import nc from "next-connect";
import multer from "multer";

const upload = multer({dest: "./public/images"}).single("image");

const handler = nc<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    res.status(501).json({
      error: `Sorry something wrong happened! ${error.message}`,
    });
  },
  onNoMatch(req, res) {
    res.status(405).json({
      error: "Method not allowed",
      success: false,
    });
  },
});

handler.use(upload);

type ExtendedRequest = {
  file?: Express.Multer.File;
};

handler.post<ExtendedRequest>((req, res) => {
  return res
    .status(200)
    .json({success: true, path: `${req.file?.originalname}`});
});

export default handler;
