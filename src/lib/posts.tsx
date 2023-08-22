import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postDirectory:string = path.join(process.cwd(), 'src/posts');

interface PostData {
    id: string,
    title: string, 
    date: string,
    tags: string, 
};

export function getSortedPostData(type:string):PostData[]{
    const curDirectory = path.join(postDirectory, type)
    const fileName:string[]= fs.readdirSync(curDirectory);

    const allPostsData:PostData[] = fileName.map((fileName:string):PostData => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(curDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            id,
            title: matterResult.data.title,
            date:  matterResult.data.date,
            tags: matterResult.data.tags,
        };
    })
    return allPostsData.sort((a:PostData, b:PostData)=> (a.date < b.date ? 1 : -1));
}

export async function getPostData(id:string, type:string) {
    const fullPath = path.join(postDirectory, type, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const processContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processContent.toString();

    return {
        id,
        contentHtml,
        tags: matterResult.data.tags,
        title: matterResult.data.title,
        date: matterResult.data.date,
    }
}