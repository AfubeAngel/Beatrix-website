interface ArticleHeaderProps {
  title: string;
  date: string;
  author: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, date, author }) => {
  return (
    <header className="text-center py-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-500">{date} | {author}</p>
    </header>
  );
};

export default ArticleHeader;

