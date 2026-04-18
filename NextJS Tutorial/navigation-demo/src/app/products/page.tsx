import Link from 'next/link'
export default function ProductsList(){
    const dummyId = 100;
    return(
        <div className='p-10'>
            <h1 className='text-2xl'>Products List</h1>
        <ul className='list-disc list-inside'>
           <Link href='/products/1'> <li>Product 1</li> </Link>
           <Link href='/products/2' replace> <li>Product 2</li> </Link>
            <li>Product 3</li>
            <li>Product 4</li>
            <Link href={`/products/${dummyId}`}><li>Product {dummyId}</li> </Link>
        </ul>
        <br/>
        <Link className='text-xl' href={'/'}>Home</Link>
        </div>
    )
}

// * Notes
// dynamically we can also set the routes in the Link tag, suppose we are getting some kind of number or id from some api or some refernce and that is a part of the route then we can just use backticks to render it in the href prop, here we have taken a simple variable as the productId

// ! 'replace' prop changes the navigation history working. Explanation by ChatGPT:
// What is replace in <Link>?
// In Next.js, when you use the <Link> component, navigation works like pushing a new entry into the browser’s history stack (like router.push()).
// By default → clicking a <Link> means a new history entry is created.
// If you add replace → it replaces the current entry instead of pushing a new one (like router.replace()).