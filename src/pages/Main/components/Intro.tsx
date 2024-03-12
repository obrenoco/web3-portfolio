import { GlobeIcon } from "../../../assets/icons/globe";
import { Tag } from "../../../components/Tag";
import MainBanner from "../../../assets/images/main-banner.jpeg";
import { ArrowIcon } from "../../../assets/icons/arrow-top-right";
import { SparkIcon } from "../../../assets/icons/spark";
import Img from "../../../assets/images/sample-1.jpg";
import { Divider } from "../../../components/Divider";

export const Intro = () => (
  <section className="md:p-body pt-10 md:pt-20 pb-0 bg-primary">
    <div className="flex justify-between gap-10 flex-col p-body md:flex-row">
      <div>
        <h1 className="text-white w-min md:mb-8">Web3 Agency</h1>
      </div>
      <div className="flex flex-col gap-6 mb-4 md:mb-0 items-center">
        <div className="bg-red-500 w-10/12 h-16 rounded-full">
          <img
            src={Img}
            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-300"
            alt=""
          />
        </div>
        <div className="flex w-full items-center justify-center gap-10 opacity-35">
          <SparkIcon />
          <SparkIcon />
          <SparkIcon />
        </div>
        <p className="text-sm text-center md:text-right text-gray-300">
          The art of visual communication, creatively impacting the world around
          us - one good design at a time, design like you mean it !
        </p>
      </div>
    </div>
    <div className="flex gap-3 items-center flex-col p-body md:flex-row">
      <div className="flex gap-4 mb-10 md:mb-0">
        <Tag Icon={GlobeIcon} title="2022 Best Agency" selected color="white" />
        <Tag
          Icon={GlobeIcon}
          title="World Class Agency"
          selected
          color="white"
        />
      </div>
      <Divider />
    </div>
    <div className="relative">
      <a href="#services">
        <ArrowIcon className="w-28 h-28 md:w-40 md:h-40 bg-white text-primary rounded-full absolute z-10 right-4 md:right-11 -top-6 p-6 hover:w-44 hover:h-44 hover:rotate-[135deg] transition-all duration-700" />
      </a>
      <img
        src={MainBanner}
        className="w-full rounded-t-[5rem] object-cover h-[34rem] mt-16 relative"
        alt=""
      />
    </div>
  </section>
);
