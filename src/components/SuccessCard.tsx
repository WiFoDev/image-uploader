import Image from "next/image";
import React, {FC, useEffect, useState} from "react";

interface SuccessCardProps {
  imageURL?: string;
  uploadAgain?: () => void;
}
//35

const urlShortener = (url: string): string => {
  return `${url.slice(0, 33)}...`;
};

export const SuccessCard: FC<SuccessCardProps> = ({
  imageURL,
  uploadAgain,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText(imageURL as string);
    setCopied(true);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (copied) {
      timeout = setTimeout(() => setCopied(false), 2000);
    }

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <>
      <section className="w-[25rem] rounded-xl shadow-slate-400/50 shadow-outer px-8 py-9 flex flex-col items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 p-2 mx-auto bg-green-100 rounded-full dark:bg-green-900">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <h1>Uploaded Successfully!</h1>
        <div
          className="overflow-hidden bg-[#F6F8FB] rounded-xl w-full h-[13.75rem] my-3.5 cursor-pointer"
          onClick={copyToClipboardHandler}
        >
          <div className="relative w-full h-full">
            <Image
              priority
              alt="Image representation"
              layout="fill"
              src={imageURL as string}
            />
          </div>
        </div>
        <div className="relative z-20 bg-[#F6F8FB] text-background w-full rounded p-3 text-xs">
          {urlShortener(imageURL as string)}
          <button
            className="rounded bg-[#2F80ED] absolute text-white h-[96%] grid place-items-center px-4 right-[1px] top-[1px]"
            onClick={copyToClipboardHandler}
          >
            Copy Link
          </button>
        </div>
        <div className="h-8">
          {copied && (
            <div className="px-1 text-sm border-2 rounded animate-fade-in-down">
              Copied!
            </div>
          )}
        </div>
        <button
          className="underline cursor-pointer"
          onClick={uploadAgain}
        >
          Upload Another File
        </button>
      </section>
    </>
  );
};
