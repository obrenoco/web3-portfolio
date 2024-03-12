import { ArrowIcon } from "../assets/icons/arrow-top-right";

export const Card = ({ title }: { title: string }) => (
  <div className="border-y-[1px] border-gray-700 px-6 py-10 text-2xl md:text-4xl flex items-center justify-between font-bold hover:bg-gray-800 hover:border-transparent transition-all duration-200 group cursor-pointer fadeIn">
    <p>
      {title}{" "}
      <span className="text-primary text-4xl md:text-7xl leading-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        .
      </span>
    </p>
    <p>
      <ArrowIcon className="text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300 w-8 h-8 md:w-14 md:h-14" />
    </p>
  </div>
);
