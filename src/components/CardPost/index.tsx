import Image from "next/image";
import { Avatar } from "../Avatar";
import Link from "next/link";

export type Post = {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: {
    id: number;
    name: string;
    username: string;
    avatar: string;
  };
};

export const CardPost = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post.slug}`} className="bg-compBackground p-4">
      <article>
        <figure>
          <Image
            src={post.cover}
            alt={post.title}
            width={438}
            height={133}
            priority={false}
          />
        </figure>
        <section>
          <h2 className="text-white text-2xl font-bold">{post.title}</h2>
          <p className="text-white text-sm">{post.body}</p>
        </section>
        <footer className="mt-4">
          <Avatar imageSrc={post.author.avatar} name={post.author.username} />
        </footer>
      </article>
    </Link>
  );
};
