import { SparkIcon } from "../../../assets/icons/spark";

const El = () => {
  const jsxElements = [];
  for (let index = 0; index < 10; index++) {
    jsxElements.push(
      <>
        <p className="text-nowrap">Web3 Portfolio</p>
        <SparkIcon className="inline w-8 h-8" />
      </>
    );
  }
  return jsxElements;
};

export const Markee = () => {
  return (
    <section className="w-auto h-20 bg-black text-white text-xl md:text-3xl font-bold flex items-center [&>*]:uppercase text-nowrap">
      <div className="scroll flex gap-8 items-center">
        <El />
      </div>
      <div className="scroll flex gap-8 ml-body items-center">
        <El />
      </div>
    </section>
  );
};
