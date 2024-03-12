import { SparkIcon } from "../../../assets/icons/spark";
import { Divider } from "../../../components/Divider";
import Img from "../../../assets/images/sample-7.webp";

export const Contact = () => (
  <>
    <a href="">
      <img
        src={Img}
        alt=""
        className="px-body h-96 w-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
      />
    </a>
    <section className="bg-primary mx-body rounded-b-[5rem] h-fit py-20 ">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="w-full flex gap-8 px-10 opacity-50 item-center">
          <Divider />
          <div className="flex gap-8">
            <SparkIcon />
            <SparkIcon />
            <SparkIcon />
          </div>
          <Divider />
        </div>
        <h3 className="px-4 md:px-0 md:w-[40rem] text-center">
          Let's discuss your ideas
        </h3>
        <div className="flex items-center gap-2">
          <button className="uppercase px-6 py-2 bg-white text-primary rounded-full text-sm font-medium">
            Talk now
          </button>
          <button className="uppercase px-6 py-2 border-white border-[1px] text-white rounded-full text-sm font-medium hover:bg-white hover:text-primary transition-all duration-300">
            Follow us
          </button>
        </div>
      </div>
    </section>
  </>
);
