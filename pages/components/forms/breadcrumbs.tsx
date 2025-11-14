import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiChevronRight } from "react-icons/hi";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // split path and filter empty items
  const segments = pathname.split("/").filter(Boolean);

  const formatLabel = (str: string) =>
    str
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize each word

  const buildHref = (index: number) =>
    "/" + segments.slice(0, index + 1).join("/");

  return (
    <nav className="flex items-center px-4 lg:px-[120px] space-x-1 text-sm text-gray-500">
      {/* Home Link */}
      <Link href="/" className="hover:text-gray-700">
        Home
      </Link>
      {segments.length > 0 && (
        <HiChevronRight className="mx-1 text-gray-400" />
      )}

      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1;
        const href = buildHref(index);

        return (
          <span key={index} className="flex items-center">
            {!isLast ? (
              <Link href={href} className="hover:text-gray-700">
                {formatLabel(segment)}
              </Link>
            ) : (
              <span className="text-[#4A7A8C] font-medium">
                {formatLabel(segment)}
              </span>
            )}

            {!isLast && (
              <HiChevronRight className="mx-1 text-gray-400" />
            )}
          </span>
        );
      })}
    </nav>
  );
}
