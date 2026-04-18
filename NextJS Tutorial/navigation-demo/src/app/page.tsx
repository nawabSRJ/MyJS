import Link from 'next/link'

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-10 gap-10 sm:p-20">
      <h2 className='heading text-white text-2xl text-center font-bold mb-10'>Navigation</h2>
      <div className='info text-xl'>
      <p>We have learned how to define routes using the file based routing system but we all have been typing them in the browser, that is NOT how <mark>normies</mark> use web apps.</p>
      <p>Hence we are now in this project going to focus on the navigation part for the general users and other topics as well.</p>
      <p>Some of the interactions which trigger navigations are : </p>
      <ul className='list-disc list-inside'>
        <li>click on links</li>
        <li>get redirected after certain actions</li>
      </ul>
      <br/>
      <p>For client-side navigation, Next.js gives us the "Link" component. The "Link" component is a React component that extends the HTML "a" element or anchor tag, and it's the primary way to navigate between routes in Next.js. To use, import it from "next/link</p>
      <p>Click this to navigate to the blog page : </p>
      <Link href='/blog'>Go to Blogs</Link> <br/>
      <Link href={`/products`}>Go to Products</Link>
      <br/><br/>
      <p>Detecting <b>active links</b> : Next.js gives us usePathname hook to help us figure out which link is active. Find it in the layout.tsx of the (auth) folder</p>
      <br/><br/>
      <p><b>params and searchParams :</b></p> 
      <ul className='list-disc list-inside'>
        <li>params is a promise that resolves to an object containing the dynamic route parameters (like id)</li>

      <li>searchParams is a promise that resolves to an object containing the query parameters(like filters and sorting)</li>

      <li>Let's understand this by immitating a news article website blog with multiple languages : </li>
      </ul>
      {/* here 'breaking-news-123' is a dynamic route parameter, whereas the lang=en & lang=fr is a query parameter */}
      <Link href='/articles/breaking-news-123?lang=en'>Read in English</Link> <br/>
      <Link href='/articles/breaking-news-123?lang=fr'>Read in French</Link>
      <p>NOTE : async-await is NOT allowed in the client components, thus if we have to access the values of params and searchParams in the client component then we have to use the hook called 'use hook'</p>
      <p>While page.tsx has access to both params and searchParams, layout.tsx only access to params</p>
      </div>
      <p><b>Navigating Programmatically : </b> This means, sometimes users don't manually navigate or click links just that page automatically navigates following an action or response, like after placing the order on an e-commerce website the page automatically redirects to the HOME page or the Order Confirmation page.</p>
      <p>This simple exercise is performed in this project by the same example of an e-commerce website:</p>
      <Link href='/order-product'>Order Product</Link>
    </div>
  );
}
