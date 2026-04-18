"use client"
import { useRouter } from "next/navigation";
export default function OrderProduct(){
    const router = useRouter();

    const handleClick = ()=>{
        console.log('Order Placed')
        router.push("/");   // todo :  study more method of this like .replace, .back etc
    }
    return(
        <div className='p-5'>
        <h1 className='mb-4'>Order Product</h1>
        <button className='bg-blue-500 rounded-full p-3 cursor-pointer' onClick={handleClick}>Place Order</button>
        </div>
    )
}