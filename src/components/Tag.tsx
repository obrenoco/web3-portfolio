export const Tag = ({
  title,
  Icon,
  selected,
  onClick,
  color = "black",
}: {
  title: string;
  Icon: () => JSX.Element;
  selected?: boolean;
  color?: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`border-[1px] px-4 py-1 text-xs rounded-full flex items-center gap-2  ${
      selected
        ? `border-${color} text-${color} cursor-default`
        : "border-gray-500 text-gray-500"
    }`}
  >
    <Icon />
    {title}
  </button>
);
