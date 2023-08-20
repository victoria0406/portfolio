import { getSortedPostData } from "@/lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Updates({allPostsData}:{allPostsData:{title:string, id:number, date:string}[]}) {
  return (
    <main>
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