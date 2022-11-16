import type {NextPage} from "next";

import {Dropzone} from "@/components";

const Home: NextPage = () => {
  return (
    <section className="w-[25rem] h-[29rem] rounded-xl shadow-slate-400/50 shadow-outer px-8 py-9 flex flex-col items-center gap-4">
      <h1>Upload your image</h1>
      <p className="text-[0.625rem] mb-[0.875rem]">
        File should be Jpeg, Png...
      </p>
      <Dropzone />
    </section>
  );
};

export default Home;
