import Image from "next/image";
import LatestArticles from "./latestarticles";

interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
}

interface ArticleFooterProps {
  latestArticles: Article[];
}

// const latestArticlesData = [
//     { id: "1", title: "Understanding React", slug: "understanding-react", date: "March 20, 2025" },
//     { id: "2", title: "Getting Started with Next.js", slug: "getting-started-nextjs", date: "March 18, 2025" },
//   ];

export default function ArticleFooter({ latestArticles }: ArticleFooterProps) {
  return (
    <footer className="mt-12 border-t pt-8">
      {/* Author Section */}
      <div className="flex items-center space-x-4">
        <Image
          src="/images/author.jpg"
          alt="Author"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">Abimbola Alabi</h3>
          <p className="text-gray-500 text-sm">Certified Nutrition Coach</p>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="flex space-x-4 mt-4">
        <button className="bg-gray-200 px-4 py-2 rounded-lg">Twitter</button>
        <button className="bg-gray-200 px-4 py-2 rounded-lg">Facebook</button>
        <button className="bg-gray-200 px-4 py-2 rounded-lg">LinkedIn</button>
      </div>

      {/* Latest Articles */}
      <LatestArticles articles={latestArticles} />
    </footer>
  );
}
