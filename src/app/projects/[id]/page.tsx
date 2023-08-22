import { getPostData } from "@/lib/posts";
import { useRouter } from "next/router";

export async function getData(id:string) {
    const postData = await getPostData(id, 'projects');
    return postData;
}

export default async function Page({params:{id}}:{params:{id:string}}) {
    const { title, date, tags, contentHtml }: {title: string, date: string, tags: string, contentHtml: string} = await getData(id); 
    return (
        <main className="p-8 pt-28">
          <h1>{title}</h1>
          <p>작성 날짜: {date}</p>
          <p>{tags.split('/').map((tag:string)=>(`#${tag} `))}</p>
          <br />
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </main>
      );
}