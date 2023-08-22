import { getSortedPostData } from "@/lib/posts";

export function getData() {
  return getSortedPostData('projects');
};

export default function Projects() {
  const allPostsData = getData();
  const years:string[] = new Array(allPostsData.length);
  allPostsData.forEach((e, i)=>{
    let startYear = e.date.replace(' ', '').split('~')[0].split('-')[0];
    startYear = startYear === ' Progressing'?'2023':startYear;
    if (years.indexOf(startYear) == -1) years[i]=startYear;
  }, []);
  return (
    <main className="p-8 pt-28">
      <ul>
        {allPostsData.map(({title, id, date, tags}:{title:string, id:string, date:string, tags: string}, i:number)=>(
        <li
            className="flex mb-8"
            key={i}
        >
          <h1 className="text-4xl pr-8 font-bold w-32">{years[i]}</h1>
            <a
                href={`/projects/${id}`}
                className="shadow p-4 rounded w-full"
            >
              <div>
                <h3 className="text-2xl mb-2 font-bold">{title}</h3>
                <p className="text-sm mb-4">Date: {date}</p>
                <div>{tags.split('/').map((tag:string, tag_index:number)=>(
                    <span
                        className="bg-secondary-100 mx-1 p-1"
                        key={tag_index}
                    >
                        {tag}
                    </span>
                ))}</div>
              </div>
            </a>
        </li>
        ))}
      </ul>
    </main>
  )
}