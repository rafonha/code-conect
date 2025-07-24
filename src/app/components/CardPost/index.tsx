import Image from "next/image";
import { Avatar } from "../Avatar";

type Post = {
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
    <article className="bg-compBackground">
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
      <footer>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
