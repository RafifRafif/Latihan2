import BlogCard from "./components/BlogCard";
interface BlogProp {
  params: { id: string; title: string };
}

export default function BlogDetail({ params }: BlogProp) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Halaman Blog</h1>
      <BlogCard
        title={params.title}
        description={`Ini adalah artikel dengan ID ${params.id}`}
      ></BlogCard>
    </div>
  );
}
