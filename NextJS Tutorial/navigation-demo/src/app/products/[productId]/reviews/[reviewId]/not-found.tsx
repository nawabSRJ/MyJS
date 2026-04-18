/*
export default function NotFound(){
    return(
        <h1>Review Not Found (Custom for reviewId)</h1>
    )
}
    smarter code below
    */ 
// if not this then global level app dir wala not found page will be displayed
// Not found component does not accept props
// the name of the file is a convention thus it MUST be named 'not-found.tsx'

// todo - writing smarter code, comment the upper one
"use client";
import { usePathname } from "next/navigation";
 
export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    // for reference let's log the pathname:
    console.log(`Here is the pathname : `,pathname)
    return(
        <h2>Review {reviewId} not found for prodcut {productId}</h2>
    )
}


