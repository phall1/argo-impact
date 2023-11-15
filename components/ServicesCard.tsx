export interface ServicesCardProps {
  number: number;
  title: string;
  items: { subtitle: string; content: string }[];
}

export default function ServicesCard({
  number,
  title,
  items,
}: ServicesCardProps) {
  return (
    <div className="">
      <div className="flex items-center space-x-2">
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full bg-green-900 text-white`}
        >
          <span className="text-2xl">{number}</span>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="my-4 border-b-4 border-green-800" />
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index}>
            <h4 className="text-md font-semibold text-gray-700">
              {item.subtitle}
            </h4>
            <p className="text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
