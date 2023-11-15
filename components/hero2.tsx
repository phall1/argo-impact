export default function Hero2() {
  const title = "Guiding Small Business Through the AI Revolution";
  const copy = [
    `At Argo Impact Consulting, we specialize in elevating the productivity of small and medium-sized businesses through the strategic adoption of AI tools.`,
    `We focus on integrating AI into your business operations to unlock their full potential and enhance managerial visibility and control.`,
  ];

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-green-900">{title}</h1>
      </div>
      <p className="text-xl mb-10">{copy[0]}</p>
      <p className="text-xl mb-10">{copy[1]}</p>
    </div>
  );
}
