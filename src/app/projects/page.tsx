import { getSortedPostData } from "@/lib/posts";

export function getData() {
  return getSortedPostData('projects');
}

export default function Projects() {
  const allPostsData = getData();
  return (
    <main className="p-8 pt-28">
      <ul>
        {allPostsData.map(({title, id, date, tags}:{title:string, id:string, date:string, tags: string}, i:number)=>(
          <li key={i}>
            <a href={`/projects/${id}`}>
              <div>
                <h3>{title}</h3>
                <p>Date: {date}</p>
                <div>{tags.split('/').map((tag:string, tag_index:number)=>(<span key={tag_index}>{tag}</span>))}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}