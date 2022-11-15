import type {NextPage} from "next";

const Home: NextPage = () => {
  return (
    <section className="w-[25rem] h-[29rem] rounded-2xl border-slate-400/50 border-[1px] shadow-slate-400/50 shadow-lg p-8 flex flex-col items-center">
      <h1>Upload your image</h1>
      <p>File should be Jpeg, Png...</p>
      <div>drag</div>
      <p>Or</p>
      <button>Choose a file</button>
    </section>
  );
};

export default Home;
