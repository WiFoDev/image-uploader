import Image from "next/image";
import React, {FC} from "react";
import {useDropzone} from "react-dropzone";

import imagePic from "@/assets/image.svg";

type DropzoneProps = {
  onDrop: (acceptedFiles: File[]) => void;
};

export const Dropzone: FC<DropzoneProps> = ({onDrop}) => {
  const {getRootProps, getInputProps, open} = useDropzone({
    accept: {"image/*": [".png", ".gif", ".jpeg", ".jpg"]},
    onDrop,
  });

  return (
    <>
      <div
        {...getRootProps()}
        className="border-[2px] bg-[#F6F8FB] rounded-xl w-full h-[13.75rem] border-dashed border-[#97BEF4] flex flex-col items-center"
      >
        <input {...getInputProps()} />
        <div className="my-9">
          <Image alt="Image representation" src={imagePic} />
        </div>
        <p className="text-xs">Drag & Drop your image here</p>
      </div>
      <p className="my-1 text-xs">Or</p>
      <button
        className="w-[6.35rem] text-xs rounded-lg bg-[#2F80ED] py-2"
        onClick={open}
      >
        Choose a file
      </button>
    </>
  );
};
