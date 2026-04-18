import Link  from 'next/link';
export default async function  NewsArticle({params,searchParams}:
    {
        params:Promise<{articleId:string}>;
        searchParams:Promise<{lang?: "en" | "es" | "fr"}>
    }){
        const {articleId} = await params;
        const {lang='en'} = await searchParams;
         
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