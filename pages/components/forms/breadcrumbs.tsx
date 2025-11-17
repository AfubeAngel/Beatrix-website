import Link from "next/link";
import { useNavigationStore } from "@/stores/useNavigationStore";
import { HiChevronRight } from "react-icons/hi";

const LABELS: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/blog": "Blog",
  "/contact": "Contact",
  "/consultation": "Book A Consultation",
  "/firstconsultation": "First Time Consultation",
  "/womenhealth": "Women’s Health History",
  "/menhealth": "Men’s Health History",
  "/followup": "Follow-Up Consultation (Revisit)",
};

export default function Breadcrumbs() {
  const previous = useNavigationStore((s) => s.previousRoute);
  const current = useNavigationStore((s) => s.currentRoute);

  // Narrow to a string before using as index
  const currentLabel = current ? LABELS[current] ?? current : "";
  const previousLabel = previous && previous !== "/" ? LABELS[previous] ?? previous : "";

  return (
    <nav className="flex items-center px-4 lg:px-[120px] space-x-1 text-sm text-gray-500">
      <Link href="/">Home</Link>

      {previous && previous !== "/" && (
        <>
          <HiChevronRight className="mx-1 text-gray-400" />
          <Link href={previous}>{previousLabel}</Link>
        </>
      )}

      <HiChevronRight className="mx-1 text-gray-400" />

      {currentLabel ? (
        <span className="text-[#4A7A8C] font-medium">{currentLabel}</span>
      ) : (
        <span className="text-[#4A7A8C] font-medium">—</span> // optional fallback
      )}
    </nav>
  );
}
