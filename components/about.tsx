import ProfileCard from "./Profilecard";

export default function About() {
  const members = [
    {
      name: "James Blunt",
      title: "Chief Step Bro",
      image: "path-to-image",
      description: "Mac Daddy of Step Bros",
    },
    {
      name: "David Tenant",
      title: "Assistant to the Chief Step Bro",
      image: "path-to-image",
      description: "Assistant to the Mac Daddy of Step Bros",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        About Us
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center">
        {members.map((member) => (
          <ProfileCard
            key={member.name}
            name={member.name}
            image={member.image}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
}
