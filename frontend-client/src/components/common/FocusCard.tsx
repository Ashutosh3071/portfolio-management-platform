type Props = {
  title: string;
  text: string;
};

const FocusCard = ({ title, text }: Props) => {
  return (
    <div className="bg-slate-900 p-6 rounded-lg hover:scale-105 transition">
      <h3 className="text-lg font-semibold text-indigo-400 mb-2">
        {title}
      </h3>
      <p className="text-gray-400">{text}</p>
    </div>
  );
};

export default FocusCard;
