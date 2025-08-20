// route parameters are already received as props in the component with namely 'params' 
export default async function ProductsList({params}:
    {
        params:Promise<{productId:string}>;
    }
){
    const prodId = (await params).productId;
    return(
        <h1>Product details here for {prodId}</h1>
    )
}