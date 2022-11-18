import type {NextApiRequest, NextApiResponse} from "next";

import {v2 as cloudinary} from "cloudinary";
import nc from "next-connect";
import multer from "multer";
import cors from "cors";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

const upload = multer({storage: multer.diskStorage({})});

apiRoute.use(cors());

apiRoute.use(upload.single("image"));

type ExtendedRequest = {
  file?: Express.Multer.File;
};

apiRoute.post<ExtendedRequest>(async (req, res) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  if (!req.file)
    return res
      .status(401)
      .json({error: "Bad request, missing file parameter"});

  try {
    // Upload the image
    const upload = await cloudinary.uploader.upload(
      req.file.path,
      options,
    );

    return res.json({success: true, imageURL: upload?.secure_url});
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .json({error: "Something bad happen while uploading the file"});
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
