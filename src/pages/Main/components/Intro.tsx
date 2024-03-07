import { GlobeIcon } from "../../../assets/icons/globe";
import { Tag } from "../../../components/Tag";
import MainBanner from "../../../assets/images/main-banner.jpeg";
import { ArrowIcon } from "../../../assets/icons/arrow-top-right";

export const Intro = () => (
  <section className="p-body pb-0 bg-primary">
    <h1 className="text-white w-36 mb-8">Web3 Agency</h1>
    <div className="flex gap-3">
      <Tag Icon={GlobeIcon} title="2022 Best Agency" selected color="white" />
      <Tag Icon={GlobeIcon} title="World Class Agency" selected color="white" />
    </div>
    <div className="relative">
      <a href="#services">
        <ArrowIcon className="w-40 h-40 bg-white text-primary rounded-full absolute z-10 right-11 -top-6 p-6 hover:w-44 hover:h-44 hover:rotate-[135deg] transition-all duration-700" />
      </a>
      <img
        src={MainBanner}
        className="w-full rounded-t-[5rem] object-cover h-[34rem] mt-16 relative"
        alt=""
      />
    </div>
  </section>
);
