import Link from "next/link";

export default function Header() {
  const headerContent = {
    items: [
      { name: "About", link: "#about" },
      { name: "Services", link: "#services" },
      { name: "Contact", link: "#contact" },
    ],
  };

  return (
    <header className="fixed top-0 inset-x-0 bg-white shadow-md z-50">
      <nav className="flex justify-center items-center py-4">
        {headerContent.items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="mx-4 text-gray-800 hover:text-gray-600 text-lg"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
