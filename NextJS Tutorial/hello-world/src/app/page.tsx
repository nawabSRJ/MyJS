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
      <h2>Route Groups</h2>
      <ul>
        <li>
          Route groups are a way to group routes together without affecting the
          url structure.
        </li>
        <li>
          Normally, in Next.js App Router The folder name = the route path,
          example: app/dashboard/page.js → /dashboard
        </li>
        <li>
          But sometimes, you want folders only for organization, not to show up
          in the URL.That is where route groups help.
        </li>
        <li>Like you would not want to create separate folders for register, login and forgot-password, all of them come under the functionality of auth.
        So you can create an 'Auth' folder and then put those 3 folders inside of it.
        But then the routes will become - auth/login, auth/register and so on...
        This might look right for auth but not necessarily for everything, thus we use route groups.
        </li>
        <li>
          To make a folder as a route group just add parenthesis in the folder name. So naming auth folder as - (auth) will make the sub-folders inside of it the routes and not it since it is considered just for grouping logically. So now the routes will be - /register, /login, /forgot-password 
        </li>
      </ul>
      <h2>Layouts</h2>
      <ul>
        <li>
            pages are route specific UI components
        </li>
        <li>
            A layout is UI that is shared between multiple pages in our app
        </li>
        <li>
          Nested Layout also explained in the layout.tsx file inside of the [productId] folder.
        </li>
      </ul>
      <h2>Metadata</h2>
      <ul>
        <li>You cannot use both static and dynamic metadata component in the same file(or route segment), its only either one of them</li>
        <li>
          Metadata will not work in the pages that are marked with 'use client' directive
        </li>
        <li>Both static and dynamic metadata are shown in this project code</li>
        <li><b>Title Metadata</b> : it's purpose is to define the document title. It can either be a string or a dynamic object. (already dynamic metadata demo covered on it) in reviews</li>
      </ul>
      <p>-------------------------------------------------------------- END OF DEMO --------------------------------------------------------------</p>
    </div>
  );
}

