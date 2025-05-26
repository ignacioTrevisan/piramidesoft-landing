import { getVisibleBlogs } from "@/app/action/blogs";
import { BlogList } from "./blogList";

export default async function BlogsPage() {
  const response = await getVisibleBlogs();
  const blogs = response.ok && response.data ? response.data : [];

  return <BlogList initialBlogs={blogs} />;
}
