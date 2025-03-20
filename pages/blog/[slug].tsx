import { useRouter } from "next/router";
import ArticleHeader from "../components/blog/articleHeader";
import ArticleContent from "../components/blog/articleContent";
import ArticleFooter from "../components/blog/articleFooter";

interface Post {
  title: string;
  date: string;
  author: string;
  content: string;
  slug: string;
  image: string;
  latestArticles: { id: string; title: string; slug: string; date: string }[];
}
interface BlogPostProps {
  post: Post;
}

export default function BlogPost({ post }: BlogPostProps) {
  const router = useRouter();

  // Show loading state if the page is still being generated
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <ArticleHeader title={post.title} date={post.date} author={post.author} />
      <ArticleContent content={post.content} image={post.image} />
      <ArticleFooter latestArticles={post.latestArticles} />
    </div>
  );
}

// Fetch data for each individual blog post
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const res = await fetch(`https://your-api.com/posts/${params.slug}`);
  const post: Post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 10, // Revalidate the page every 10 seconds
  };
}

// Generate paths dynamically for each blog post
export async function getStaticPaths() {
  const res = await fetch("https://your-api.com/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}
