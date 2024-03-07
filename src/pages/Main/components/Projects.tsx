import { GlobeIcon } from "../../../assets/icons/globe";
import { Tag } from "../../../components/Tag";

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
      <p className="text-sm text-gray-700 max-w-[525px]">
        Description description description description description description
        description description description description description description
        description description
      </p>
    </div>
    <div className="grid grid-cols-3 gap-4 [&>*]:w-full [&>*]:h-full [&>*]:aspect-square [&>*]:bg-primary">
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <div className="rounded-br-[6rem]"></div>
    </div>
  </section>
);
