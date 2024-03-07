import { ArrowIcon } from "../assets/icons/arrow-top-right";

export const Card = ({ title }: { title: string }) => (
  <div className="border-y-[1px] border-gray-700 px-6 py-10 text-4xl flex items-center justify-between font-bold hover:bg-gray-800 hover:border-transparent transition-all duration-200 group  cursor-pointer">
    <p>
      {title}{" "}
      <span className="text-primary text-7xl leading-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        .
      </span>
    </p>
    <p>
      <ArrowIcon className="text-gray-400 group-hover:bg-primary group-hover:text-black transition-colors duration-300 w-14 h-14" />
    </p>
  </div>
);
