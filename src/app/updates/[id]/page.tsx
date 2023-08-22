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

export default function Page(
    {postData:{title, id, date, tags, contentHtml}}
    :{postData: {title:string, id:string, date:string, tags:string, contentHtml: string}}) {
    console.log(tags);
    return (
        <main>
          <h1>{title}</h1>
          <p>작성 날짜: {date}</p>
          <p>{tags.split('/').map((tag)=>(`#${tag} `))}</p>
          <br />
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </main>
      );
}