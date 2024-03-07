import { GlobeIcon } from "../../../assets/icons/globe";
import { Card } from "../../../components/Card";
import { Tag } from "../../../components/Tag";

export const Services = () => (
  <section
    className="bg-gray-900 w-full px-body text-white py-14"
    id="services"
  >
    <div className="flex gap-16 items-end justify-between">
      <div className="flex flex-col gap-4">
        <h2>
          Our services <span className="text-primary text-8xl">.</span>
        </h2>
        <p className="text-sm text-gray-700 max-w-[525px]">
          Description description description description description
          description description description description description
          description description description description
        </p>
      </div>
      <div className="min-w-80">
        <ul className="flex gap-4 w-full justify-end flex-wrap text-white">
          <li>
            <Tag Icon={GlobeIcon} title="Design" color="white" selected />
          </li>
          <li>
            <Tag Icon={GlobeIcon} title="Development" color="white" />
          </li>
          <li>
            <Tag Icon={GlobeIcon} title="Data Marketing" color="white" />
          </li>
          <li>
            <Tag Icon={GlobeIcon} title="SEO" color="white" />
          </li>
        </ul>
      </div>
    </div>

    <div className="my-10">
      <Card title="UI/UX Design" />
      <Card title="Web Design" />
      <Card title="Brand Design" />
      <Card title="Graphic Design" />
    </div>
  </section>
);
