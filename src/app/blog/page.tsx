import PageTitle from "@/components/shared/PageTitle";
import { useDataApi } from "@/components/shared/modules/api/server";
import DisplayBlogs from "./_components/DisplayBlogs";

export default async function Blog() {
  const dataBlog = await useDataApi("/blog");
  return (
    <div>
      <PageTitle
        title="Blog"
        description="I occasionally write about programming, productivity, and more."
      />
      <div className="mt-10">
      <DisplayBlogs listData={dataBlog.data} />
      </div>
    </div>
  );
}
