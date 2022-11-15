import type {NextPage} from "next";

import Image from "next/image";

import imagePic from "@/assets/image.svg";

const Home: NextPage = () => {
  return (
    <section className="w-[25rem] h-[29rem] rounded-xl shadow-slate-400/50 shadow-outer px-8 py-9 flex flex-col items-center gap-4">
      <h1>Upload your image</h1>
      <p className="text-[0.625rem] mb-[0.875rem]">
        File should be Jpeg, Png...
      </p>
      <div className="border-[2px] bg-[#F6F8FB] rounded-xl w-full h-[13.75rem] border-dashed border-[#97BEF4] flex flex-col items-center">
        <div className="my-9">
          <Image alt="Image representation" src={imagePic} />
        </div>
        <p className="text-xs">Drag & Drop your image here</p>
      </div>
      <p className="my-1 text-xs">Or</p>
      <button className="w-[6.35rem] text-xs rounded-lg bg-[#2F80ED] py-2">
        Choose a file
      </button>
    </section>
  );
};

export default Home;
