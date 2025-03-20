interface Article {
    id: string;
    title: string;
    slug: string;
    date: string;
  }
  
  interface LatestArticlesProps {
    articles: Article[];
  }
  
  export default function LatestArticles({ articles }: LatestArticlesProps) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Latest Articles</h2>
        <ul className="mt-4 space-y-4">
          {articles.map((article) => (
            <li key={article.id} className="border-b pb-2">
              <a href={`/blog/${article.slug}`} className="text-green-600">
                {article.title}
              </a>
              <p className="text-gray-500 text-sm">{article.date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  