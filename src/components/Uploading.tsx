import React from "react";
import {RaceBy} from "@uiball/loaders";

export const Uploading = () => {
  return (
    <section className="w-[25rem] rounded-xl shadow-slate-400/50 shadow-outer px-8 py-9 flex flex-col gap-8">
      <h1>Uploading...</h1>
      <RaceBy color="#2F80ED" lineWeight={5} size={340} speed={3} />
    </section>
  );
};
