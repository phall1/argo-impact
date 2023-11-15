export default function Description() {
  const content = [
    `
    Small businesses need to adopt AI tools systematically to stay
    competitive. Without this, they risk falling behind in the fast-paced
    business world.
    `,
    `
    Large companies are creating custom AI solutions, an option too costly
    for smaller businesses. Yet, employees in small businesses are already
    using publicly available AI tools, often without their managers
    knowing. This unsupervised, ad-hoc usage results in inconsistent
    outcomes and under-utilised potential, particularly if employees
    aren’t auditing AI outputs.
    `,
    `
    The world of AI tools evolves rapidly. Understanding how to use these
    tools effectively, and keeping abreast of market developments, is
    crucial but not always accessible. AI technologists aren’t always able
    to explain their tools as simple business solutions.
    `,
    `
    It's not just about having access to AI tools; it's about
    understanding and using them to their fullest to spur growth and
    productivity. This situation underscores an urgent need for tailored
    AI integration strategies that can unlock these tools' immense value
    for small business growth and innovation.
    `,
  ];

  return (
    <div className="flex flex-row">
      <div className="flex flex-col mr-4 text-green-800">
        <h1 className="text-right text-4xl font-bold">AI-Adoption:</h1>
        <h2 className="text-right text-xl">A small business imperative</h2>
      </div>
      <div className="text-lg">
        {content.map((paragraph, index) => (
          <p key={index} className="mb-10">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
