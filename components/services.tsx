import ServicesCard, { ServicesCardProps } from "./ServicesCard";

export default function Services() {
  const services: ServicesCardProps[] = [
    {
      number: 1,
      title: "AI Tool Planning & Integration",
      items: [
        {
          subtitle: "AI Readiness Assessment:",
          content:
            "Evaluating your current business processes to pinpoint opportunities for AI enhancement",
        },
        {
          subtitle: "AI Tool Selection and Integration:",
          content:
            "Assisting in choosing and implementing the right AI tools that fit seamlessly with your business needs.",
        },
      ],
    },
    {
      number: 2,
      title: "AI Tool Training & Insights",
      items: [
        {
          subtitle: "Performance Monitoring and Optimisation:",
          content:
            "Monitor and optimize your AI tools to enhance their efficiency and effectiveness",
        },
        {
          subtitle: "Training and Change Management:",
          content:
            "Providing specialised training and change management strategies to facilitate a smooth transition to AI-enhanced processes.",
        },
      ],
    },
    {
      number: 3,
      title: "Growth Strategy & Business Consulting",
      items: [
        {
          subtitle: "Data Analysis and Insights:",
          content:
            "Leveraging AI for deep data analysis, delivering actionable insights for smarter business decisions",
        },
        {
          subtitle: "Strategic Consulting and Advisory Services:",
          content:
            "Offering expert guidance in growth strategy, marketing, and e-commerce, tailored to drive your business forward",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-green-900">OurServices</h1>
      <div className="flex flex-row gap-4">
        {services.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
