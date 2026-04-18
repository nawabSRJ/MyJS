// route parameters are already received as props in the component with namely 'params'
// ! Now using dynamic metadata
import { Metadata } from "next";
type props = {
  params: Promise<{ productId: string }>;
};
export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `Product ${id}`,
  };
};

export default async function ProductsList({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const prodId = (await params).productId;
  return( 
    <div className='p-10'>
  <h1>Product details here for {prodId}</h1>
  <p>Notice how the title of the page changes as per route :) </p>
    </div>
);

}
