export default function Page() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>Welcome to Learning Next.js</h2>
      <br />
      <h2>Routing</h2>
      <ul>
        <li>The routes are directly tied to their folder names</li>
        <li>
          It is not mandatory to keep all your code in the app dir. as we have
          done with this specific intro project.
        </li>
        <li>
          Yes, the code generally resides in the "src" that should be kept in
          mind, inside of it you can create different folders apart from app
          dir.
        </li>
        <li>
          For example : Shadcn lib keeps its components in the components
          folder.
        </li>
      </ul>
      <h2>Private Folders</h2>
      <ul>
        <li>
          Private folders are a way to tell Next.js, "Hey this folder is just
          for some internal stuff and thus don't include it in the routing
          system". This excludes that particular folder and all its sub-folders
          from the routing. We do this by adding an underscore at the start of
          the name of the folder.
        </li>
        <li>They can be useful for a bunch of things : </li>
        <ol>
          <li>Keeping your UI logic separate from routing logic</li>
          <li>
            Having a consistent way to organize internal files in your project
          </li>
          <li>Making it easier to group related files in your code editor</li>
          <li>
            Avoiding potential naming conflicts with future Next.js file naming
            conventions
          </li>
        </ol>
      </ul>
    </div>
  );
}
