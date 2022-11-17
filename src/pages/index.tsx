import type {NextPage} from "next";

import {useCallback} from "react";

import {Dropzone} from "@/components";

const Home: NextPage = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const formData = new FormData();

      formData.append("image", file);
      fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    });
  }, []);

  return (
    <section className="w-[25rem] h-[29rem] rounded-xl shadow-slate-400/50 shadow-outer px-8 py-9 flex flex-col items-center gap-4">
      <h1>Upload your image</h1>
      <p className="text-[0.625rem] mb-[0.875rem]">
        File should be Jpeg, Png...
      </p>
      <Dropzone onDrop={onDrop} />
    </section>
  );
};

export default Home;
