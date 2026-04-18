// this file shows how to use the params and searchParams in the client component since the async-await are NOT supported in the client components - resort to 'use hook' from react
"use client"
import Link  from 'next/link';
import { use } from 'react'
export default function  NewsArticle({params,searchParams}:
    {
        params:Promise<{articleId:string}>;
        searchParams:Promise<{lang?: "en" | "es" | "fr"}>
    }){
        const {articleId} =  use(params);
        const {lang='en'} =  use(searchParams);
         
    return(
        <div>
            <h1>News Article {articleId}</h1>
            <p>Reading in {lang}</p>

            <div className='flex flex-row gap-10 p-5'> 
                {/* language switcher */}
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
    )
}

// * NOTE the changes :
// async-await if removed
// use hook is imported and use is replaced with the await keyword (line 10 and 11)
// that's all what is needed to work with params and searchParams in client components