import { ArrowIcon } from "../../../assets/icons/arrow-top-right";
import { SparkIcon } from "../../../assets/icons/spark";
import Img1 from "../../../assets/images/sample-6.jpg";
import Img2 from "../../../assets/images/sample-5.jpg";

export const Quote = () => (
  <section className="p-body bg-gray-900">
    <p className="uppercase font-bold text-white bg-gray-700 px-4 md:px-32 py-24 text-3xl md:text-6xl text-center">
      a creative{" "}
      <span className="h-[1.1ch] w-32 bg-primary inline-block rounded-full">
        {" "}
        <img
          src={Img1}
          alt=""
          className="w-full h-full rounded-full grayscale object-cover hover:grayscale-0 transition-all duration-300"
        />
      </span>{" "}
      mind knows{" "}
      <span className="h-[1.1ch] bg-primary inline-block rounded-full">
        <ArrowIcon className="w-full h-full p-1 hover:rotate-[135deg] transition-all duration-500" />
      </span>{" "}
      how to do the{" "}
      <span className="h-[1.1ch] w-28 bg-primary inline-block rounded-full">
        <img
          src={Img2}
          alt=""
          className="w-full h-full rounded-full grayscale object-cover hover:grayscale-0 transition-all duration-300"
        />
      </span>{" "}
      right thing at the right place and at the{" "}
      <span className="h-[1.1ch] w-20 bg-primary inline-block rounded-full">
        <SparkIcon className="w-full h-full p-2 hover:p-0 transition-all duration-300" />
      </span>{" "}
      right time
    </p>
  </section>
);
