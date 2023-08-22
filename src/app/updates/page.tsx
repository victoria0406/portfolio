import { getSortedPostData } from "@/lib/posts";

export function getData() {
  return getSortedPostData('updates');
}

export default function Updates() {
  const allPostsData = getData();
  return (
    <main className="p-8 pt-28">
      <ul>
        {allPostsData.map(({title, id, date}:{title:string, id:number, date:string}, i:number)=>(
          <li  key={i}>
            <a href={`/updates/${id}`}>
              <div>
                <h3>{title}</h3>
                <p>Date: {date}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

/* 
<ul>
        {allPostsData.map(({title, id, date}:{title:string, id:number, date:string}, i:number)=>(
          <li  key={i}>
            <a href={`/updates/${id}`}>
              <div>
                <h3>{title}</h3>
                <p>Date: {date}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
*/