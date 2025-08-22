// ? This is a Nested Layout

export default function ProductDetailsLayout({children}:{
    children:React.ReactNode;
}){
    return(
        <>
        {children}
        <h2 style={{backgroundColor:'whitesmoke', padding:'2px'}}>Featured Products</h2>
        </>
    )
}   

// * Notes for Nested Layout
// upon visiting the route /product, only root/default layout.tsx will be visible

// but, as we add a productId in the route : /product/1 - let's say then in that type of cases this layout will also be added or nested in the page content along with the root layout

// ! Note that the root layout won't disappear, just that this one will be nested inside of it

// * Formal definition :

// Nested Layouts happen when you put layouts inside child folders.This allows you to stack layouts → outer layout wraps inner layout → inner layout wraps the page.

// todo : understand the real world use of these nested layouts in next.js development
