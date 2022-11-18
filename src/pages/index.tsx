import type {NextPage} from "next";

import {useCallback, useState} from "react";

import {Dropzone, Uploading} from "@/components";
import {SuccessCard} from "@/components/SuccessCard";

const Home: NextPage = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const resetPageState = () => {
    setImageUrl(undefined);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setIsUploading(true);
    acceptedFiles.forEach((file) => {
      const formData = new FormData();

      formData.append("image", file);
      fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then(({imageURL}) => {
          setImageUrl(imageURL);
          setIsUploading(false);
        });
    });
  }, []);

  if (isUploading) return <Uploading />;
  if (imageUrl)
    return (
      <SuccessCard imageURL={imageUrl} uploadAgain={resetPageState} />
    );

  return (
    <>
      <section className="w-[25rem] h-[29rem] rounded-xl shadow-slate-400/50 shadow-outer px-8 py-9 flex flex-col items-center gap-4">
        <h1>Upload your image</h1>
        <p className="text-[0.625rem] mb-[0.875rem]">
          File should be Jpeg, Png...
        </p>
        <Dropzone onDrop={onDrop} />
        <p>{imageUrl}</p>
      </section>
    </>
  );
};

export default Home;
