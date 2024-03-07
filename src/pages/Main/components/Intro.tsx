import { GlobeIcon } from "../../../assets/icons/globe";
import { Tag } from "../../../components/Tag";
import MainBanner from "../../../assets/images/main-banner.jpeg";

export const Intro = () => (
  <section className="p-body pb-0 bg-primary">
    <h1 className="text-white w-36">Digitize ideas</h1>
    <div className="flex gap-3">
      <Tag Icon={GlobeIcon} title="2022 Best Agency" selected color="white" />
      <Tag Icon={GlobeIcon} title="World Class Agency" selected color="white" />
    </div>
    <img
      src={MainBanner}
      className="w-full rounded-t-[5rem] object-cover h-[34rem] mt-16"
      alt=""
    />
  </section>
);
