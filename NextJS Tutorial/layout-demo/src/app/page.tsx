
export default function Home() {
  return (
    <>
    <div className='mx-auto text-xl mt-5 p-5'>
      <h1>Root Page.tsx</h1> <br/><br/>
      <h2 className='text-2xl font-bold text-center'>Getting multiple root layouts</h2>
      <ul>
      <li>This can be done by using <b>Route Groups</b> </li>
      <li>Group folders logically in route groups and then inside of them place layout.tsx files with modified layouts. With this being done, keep the root layout simple, default one.</li>
      </ul>
    </div>
    </>
  );
}
