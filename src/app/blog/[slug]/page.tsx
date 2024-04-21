import PageTitle from "@/components/shared/PageTitle";
import { useDataApi } from "@/components/shared/modules/api/server";
import {
  dateTimeFormat,
  handlerImageUrl,
} from "@/components/shared/modules/helper/utils";
import Image from "next/image";
import DisplayBlogs from "../_components/DisplayBlogs";

export default async function Page({ params }: { params: { slug: string } }) {
  const dataBlog = await useDataApi("/blog/" + params.slug);
  return (
    <>
      <HeaderBlog data={dataBlog?.data} />
      {/* <ContentBlog content={dataBlog?.data?.content} /> */}
      <FooterBlog />
    </>
  );
}

async function FooterBlog () {
  const dataBlog = await useDataApi("/blog");
  return (
    <div className="mt-20">
      <p>Lastest blogs</p>
      <DisplayBlogs listData={dataBlog?.data} />
    </div>
  )
}

function ContentBlog({ content }: { content: string }) {
  return (
    <div className="w-full mt-10">
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </div>
  );
}

function HeaderBlog({ data }: { data: BlogItemType }) {
  return (
    <>
      <div className="w-full mt-10">
        {data?.banner && (
          <Image
            src={handlerImageUrl(data?.banner)}
            width={800}
            height={300}
            alt={data?.name}
            className="w-full h-[200px] object-cover"
            unoptimized
          />
        )}
      </div>

      <div className="mt-10 w-full">
        <PageTitle title={data?.name} description={data?.description} />
        <p className="text-[12px] text-gray-600">
          {dateTimeFormat(data?.created_at)}
        </p>
      </div>
    </>
  );
}
