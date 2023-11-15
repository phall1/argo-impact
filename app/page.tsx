import Description from "@/components/description";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-3/4 mx-auto">
      <div>
        <section id="home">
          <Hero />
        </section>
        <div className="my-10 border-b-4 border-green-800" />
        <section id="about">
          <Hero2 />
        </section>
        <div className="my-10 border-b-4 border-green-800" />
        <section id="description">
          <Description />
        </section>
        <div className="my-10 border-b-4 border-green-800" />
        <section id="services">
          <Services />
        </section>
      </div>
    </main>
  );
}
