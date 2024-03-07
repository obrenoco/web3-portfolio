import { GlobeIcon } from "../../../assets/icons/globe";
import { Tag } from "../../../components/Tag";
import Img1 from "../../../assets/images/sample-1.jpg";
import Img2 from "../../../assets/images/sample-2.jpg";
import Img3 from "../../../assets/images/sample-3.jpg";
import Img4 from "../../../assets/images/sample-4.jpg";
import Img5 from "../../../assets/images/sample-5.jpg";
import Img6 from "../../../assets/images/sample-6.jpg";

export const Projects = () => (
  <section className="p-body pb-32" id="projects">
    <div className="flex gap-16 items-center justify-between py-body">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-white">
          Best projects <span className="text-primary text-8xl">.</span>
        </h2>
        <div className="min-w-80">
          <ul className="flex gap-4 w-full flex-wrap text-white">
            <li>
              <Tag Icon={GlobeIcon} title="Design" color="white" selected />
            </li>
            <li>
              <Tag Icon={GlobeIcon} title="Development" color="white" />
            </li>
            <li>
              <Tag Icon={GlobeIcon} title="Digital Marketing" color="white" />
            </li>
            <li>
              <Tag Icon={GlobeIcon} title="SEO" color="white" />
            </li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-gray-400 max-w-[600px] text-right">
        Explore our Web3 portfolio, a fusion of creativity and blockchain.
        Experience innovative projects in blockchain apps, smart contracts, and
        NFT platforms. Welcome to a space where design meets blockchain,
        redefining possibilities in the Web3 era.
      </p>
    </div>
    <div className="grid grid-cols-3 gap-4 [&>*]:w-full [&>*]:h-full [&>*]:aspect-square [&>*]:bg-primary [&>a>img]:object-cover [&>a>img]:h-full [&>a>img]:w-full [&>a>img]:grayscale hover:[&>a>img]:grayscale-0 [&>a>img]:transition-[filter] [&>a>img]:duration-300">
      <a href="">
        <img src={Img1} alt="" />
      </a>
      <a href="">
        <img src={Img2} alt="" />
      </a>
      <a href="">
        <img src={Img3} alt="" />
      </a>
      <a href="">
        <img src={Img4} alt="" />
      </a>
      <a href="">
        <img src={Img5} alt="" />
      </a>
      <a href="" className="rounded-br-[6rem]">
        <img src={Img6} alt="" className="rounded-br-[6rem]" />
      </a>
    </div>
  </section>
);
