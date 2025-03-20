import Image from "next/image";

  interface ArticleContentProps {
    content: string;
    image: string;
  }
  
  const ArticleContent: React.FC<ArticleContentProps> = ({ content, image }) => {
    return (
        <div className="max-w-3xl mx-auto">
        <Image src={image} alt="Article Image" className="w-full rounded-lg" />
        <article className="prose lg:prose-xl mt-6">{content}</article>
      </div>
    );
  };
  
  export default ArticleContent;