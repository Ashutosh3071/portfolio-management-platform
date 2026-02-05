type Props = {
  year: string;
  title: string;
  place: string;
  description: string;
};

const TimelineItem = ({ year, title, place, description }: Props) => {
  return (
    <div className="relative">
      <span className="absolute -left-[10px] top-1 w-4 h-4 bg-indigo-500 rounded-full"></span>

      <p className="text-sm text-gray-400">{year}</p>
      <h3 className="text-lg font-semibold text-indigo-400 mt-1">
        {title}
      </h3>
      <p className="text-gray-300 italic">{place}</p>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
};

export default TimelineItem;
