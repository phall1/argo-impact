import Link from "next/link";

export default function Header() {
  const headerContent = {
    items: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
  };

  return (
    <header className="fixed top-0 inset-x-0 bg-white shadow-md z-50">
      <nav className="flex justify-center items-center py-4">
        {headerContent.items.map((item, index) => (
          <Link href={item.href} key={index} passHref>
            <span className="mx-4 text-gray-800 hover:text-gray-600 text-lg cursor-pointer">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
