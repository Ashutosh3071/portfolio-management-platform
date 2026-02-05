type Props = {
  title: string;
  subtitle?: string;
};

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-3xl font-bold text-indigo-500">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 mt-2">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
