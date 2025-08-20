export default async function docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>;
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }
}
// catches all nested routes like /docs/hello-world, /docs/hello-world/nextjs, etc.
// this is a catch-all route that will match any path under /docs
// it can be used to create a dynamic documentation structure
// for example, you can have /docs/hello-world, /docs/nextjs, etc.
