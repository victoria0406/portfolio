import { getAllPostIds, getPostData } from "@/lib/posts";
import { useRouter } from "next/router";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}:{params:any}) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default function Page({postData}:{postData: {title:string, id:string, date:string, contentHtml: string}}) {
    const router = useRouter();
    return (
        <main>
          <h1>{postData.title}</h1>
          <br />
          <p>작성 날짜:{postData.date}</p>
          <br />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </main>
      );
}