import type {NextApiRequest, NextApiResponse} from "next";

import nc from "next-connect";
import multer from "multer";

const apiRoute = nc<NextApiRequest, NextApiResponse>({
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

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/images",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

apiRoute.use(upload.single("image"));

type ExtendedRequest = {
  file?: Express.Multer.File;
};

apiRoute.post<ExtendedRequest>((req, res) => {
  return res
    .status(200)
    .json({success: true, imagePath: req.file?.originalname});
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
