const Requirements = () => {
  return (
    <code>
      <p>
        Next.js / TypeScript Developer Test: Context &amp; Provider Component
        <br />
        &#95; &#95; &#95; &#95; &#95; &#95; &#95; &#95;
        <br />
        Objective
        <br />
        Develop a Provider component that shares user authentication data across
        multiple components in a<br />
        Next.js application.
        <br />
        &#95; &#95; &#95; &#95; &#95; &#95; &#95; &#95;
        <br />
        Requirements
        <br />
        1. Use Next.js and TypeScript to build a simple authentication state
        management system.
        <br />
        2. Create a UserProvider component that:
        <br /> &nbsp;&nbsp;○ Uses React Context to manage user authentication.
        <br /> &nbsp;&nbsp;○ Stores the user state (null if not logged in, an
        object with id, name, and email if logged
        <br />
        in).
        <br /> &nbsp;&nbsp;○ Provides functions to login and logout.
        <br />
        3. Implement a login page (pages/login.tsx) that:
        <br /> &nbsp;&nbsp;○ Uses the context to log in a user.
        <br /> &nbsp;&nbsp;○ Shows a (Log In) button if no user is logged in.
        <br /> &nbsp;&nbsp;○ Shows a (Log Out) button and user details when
        logged in.
        <br />
        4. Implement a dashboard page (pages/dashboard.tsx) that:
        <br /> &nbsp;&nbsp;○ Displays user details if logged in.
        <br /> &nbsp;&nbsp;○ Redirects to the login page if the user is not
        authenticated.
        <br />
        &#95; &#95; &#95; &#95; &#95; &#95; &#95; &#95;
        <br />
        Deliverables
        <br /> &nbsp; &nbsp;● A GitHub repository (or ZIP file) containing the
        Next.js project.
        <br /> &nbsp; &nbsp;● A README.md explaining how to run the project and
        a short explanation of the implemented logic.
        <br />
        &#95; &#95; &#95; &#95; &#95; &#95; &#95; &#95;
        <br />
        Bonus Points
        <br /> &nbsp; &nbsp;● Use localStorage or Next.js API routes for
        persistent authentication.
        <br /> &nbsp; &nbsp;● Implement a custom hook (useAuth) for easier
        consumption of the context.
        <br /> &nbsp; &nbsp;● Add basic unit tests using Jest.
      </p>
    </code>
  );
};

export default Requirements;
