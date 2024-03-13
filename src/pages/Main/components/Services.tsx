import { useState } from "react";
import { GlobeIcon } from "../../../assets/icons/globe";
import { Card } from "../../../components/Card";
import { Tag } from "../../../components/Tag";
import Img1 from "../../../assets/images/sample-1.jpg";
import Img2 from "../../../assets/images/sample-2.jpg";
import Img3 from "../../../assets/images/sample-3.jpg";
import Img4 from "../../../assets/images/sample-4.jpg";

enum Service {
  Design = "Design",
  Development = "Development",
  DataMarketing = "Data Marketing",
  SEO = "SEO",
}

type ServicesListType = {
  [Service.Design]: string[];
  [Service.Development]: string[];
  [Service.DataMarketing]: string[];
  [Service.SEO]: string[];
};

const ServicesList: ServicesListType = {
  [Service.Design]: [
    "UI/UX Design",
    "Web Design",
    "Brand Design",
    "Graphic Design",
  ],
  [Service.Development]: [
    "Frontend Development",
    "Backend Development",
    "Mobile App Development",
    "Full Stack Development",
  ],
  [Service.DataMarketing]: [
    "Data Analysis",
    "Marketing Analytics",
    "Data Visualization",
    "Data-driven Marketing",
  ],
  [Service.SEO]: [
    "On-Page SEO",
    "Off-Page SEO",
    "Keyword Research",
    "SEO Audits",
  ],
};

const Images = [Img1, Img2, Img3, Img4];

export const Services = () => {
  const [selected, setSelected] = useState(Service.Design);
  console.log(selected);

  return (
    <section
      className="bg-gray-900 w-full md:px-body text-white py-14"
      id="services"
    >
      <div className="flex gap-8 md:gap-16 items-end justify-between flex-col md:flex-row">
        <div className="flex flex-col gap-4 px-body md:px-0">
          <h2>
            Our services <span className="text-primary text-8xl">.</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-[550px]">
            Discover our services in the Web3 domain, blending creativity and
            blockchain. Explore blockchain apps, smart contracts, and NFT
            platforms. Experience innovation meeting blockchain, redefining Web3
            possibilities.
          </p>
        </div>
        <div className="min-w-80">
          <ul className="flex gap-4 w-full px-body md:px-0 justify-start md:justify-end flex-wrap text-white">
            <li>
              <Tag
                Icon={GlobeIcon}
                title="Design"
                color="white"
                selected={selected === Service.Design}
                onClick={() => setSelected(Service.Design)}
              />
            </li>
            <li>
              <Tag
                Icon={GlobeIcon}
                title="Development"
                color="white"
                selected={selected === Service.Development}
                onClick={() => setSelected(Service.Development)}
              />
            </li>
            <li>
              <Tag
                Icon={GlobeIcon}
                title="Data Marketing"
                color="white"
                selected={selected === Service.DataMarketing}
                onClick={() => setSelected(Service.DataMarketing)}
              />
            </li>
            <li>
              <Tag
                Icon={GlobeIcon}
                title="SEO"
                color="white"
                selected={selected === Service.SEO}
                onClick={() => setSelected(Service.SEO)}
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="my-10">
        {ServicesList[selected].map((x, i) => (
          <Card title={x} key={`${x}-${i}`} Img={Images[i]} />
        ))}
      </div>
    </section>
  );
};
