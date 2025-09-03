import Link from "next/link";
import { CardPost } from "../components/CardPost";
import { Post } from "../components/CardPost";

async function getPosts(page: number) {
  try {
    const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return { data: [], prev: null, next: null };
  }
}

export default async function Home({ searchParams }: { searchParams: { page: number } }) {
  const currentPage = searchParams.page || 1;
  const { data: posts, prev, next } = await getPosts(currentPage);
  return (
    <main className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {posts.map((post: Post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
      {prev && <Link href={`/?page=${prev}`} className="text-white">Página anterior</Link>}
      {next && <Link href={`/?page=${next}`} className="text-white">Próxima página</Link>}
    </main>
  );
}
