import PageTitle from "@/components/shared/PageTitle";
import { dispatchDataApi } from "@/components/shared/modules/api/server";
import {
  dateTimeFormat,
  handlerImageUrl,
} from "@/components/shared/modules/helper/utils";
import Image from "next/image";
import DisplayBlogs from "../_components/DisplayBlogs";

export async function generateStaticParams() {
  const posts = await dispatchDataApi('/blog')
 
  return posts?.data?.map((post: BlogItemType) => ({
    slug: post.slug,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <HeaderBlog slug={params?.slug} />
      <ContentBlog slug={params?.slug} />
      <FooterBlog />
    </>
  );
}

async function FooterBlog () {
  const dataBlog = await dispatchDataApi("/blog");
  return (
    <div className="mt-20">
      <p>Lastest blogs</p>
      <DisplayBlogs listData={dataBlog?.data} />
    </div>
  )
}

async function ContentBlog({ slug }: { slug: string }) {
  const dataBlog = await dispatchDataApi(`/blog/${slug}`);
  return (
    <div className="w-full mt-10">
      {dataBlog?.data?.content && <div dangerouslySetInnerHTML={{ __html: dataBlog?.data?.content }} />}
    </div>
  );
}

async function HeaderBlog({ slug }: { slug: string }) {
  const dataBlog = await dispatchDataApi(`/blog/${slug}`);
  return (
    <>
      <div className="w-full mt-10">
        {dataBlog?.data?.banner && (
          <Image
            src={handlerImageUrl(dataBlog?.data?.banner)}
            width={800}
            height={300}
            alt={dataBlog?.data?.name}
            className="w-full h-[200px] object-cover"
            unoptimized
          />
        )}
      </div>

      <div className="mt-10 w-full">
        <PageTitle title={dataBlog?.data?.name} description={dataBlog?.data?.description} />
        <p className="text-[12px] text-gray-600">
          {dateTimeFormat(dataBlog?.data?.created_at)}
        </p>
      </div>
    </>
  );
}
