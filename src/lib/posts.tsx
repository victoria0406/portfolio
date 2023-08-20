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
};

export function getSortedPostData():PostData[]{
    const fileName:string[]= fs.readdirSync(postDirectory);

    const allPostsData:PostData[] = fileName.map((fileName:string):PostData => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            id,
            title: matterResult.data.title,
            date:  matterResult.data.date,
        };
    })
    return allPostsData.sort((a:PostData, b:PostData)=> (a.date < b.date ? 1 : -1));
}

export function getAllPostIds() {
    const fileName =  fs.readdirSync(postDirectory);
    return fileName.map((fileName:string)=>({
        params: {
            id: fileName.replace(/\.md$/, ''),
        }
    }))
}

export async function getPostData(id:string) {
    const fullPath = path.join(postDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const processContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    }
}