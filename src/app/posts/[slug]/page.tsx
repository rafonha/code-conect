async function getPost(slug: string) {
  const response = await fetch(`http://localhost:3042/posts?slug=${slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  const data = await response.json();
  if (data.length === 0) {
    throw new Error("Post not found");
  }
  return data[0];
}

const PostsPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);
  return (
    <div className="bg-compBackground p-4">
      <h1 className="text-2xl font-bold text-white">{post.title}</h1>
      <p className="text-sm text-white">{post.body}</p>
    </div>
  );
};

export default PostsPage;
