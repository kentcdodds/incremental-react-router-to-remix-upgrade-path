# React Router + Remix

This is an example of how you can incrementally migrate to Remix if you're using React Router. Here's the basic idea:

1. Upgrade your React Router site to the latest version of React Router ([find out how to do this iteratively](https://www.npmjs.com/package/react-router-dom-v5-compat)).
2. Install Remix and set up the conventional files of `app/{root,entry.client,entry.server}.tsx`
3. Move all your existing code into a directory within the `app` directory (like `app/old-app` for example).
4. Remove `<BrowserRouter>` from your `App`
5. Create a `app/routes.$.tsx` file with just `export { default } from "~/old-app/app";` (or whatever file has the root component for your existing React Router app).
6. Remove all your old webpack build stuff and use the `remix` CLI instead. Your builds are now outrageously fast.
7. Everything should work at this point (_and_ it'll be server rendered too!!). Commit + push!
8. Over time, move old routes to the `routes` directory until you bring everything over.
9. You're done!

We'll have better docs and even videos about this in the future, but this is a pretty darn solid and iterative approach with quick wins and a clear path.
