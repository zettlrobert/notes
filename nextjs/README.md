# Next.js

npx create-next-app --typescript

## Navigate Between Pages
In Next.js, a page is a React Component exported from a file in the `pages` directory.

Pages are associated with a Route based on their file name. For example:
- `pages/index.ts` is associated with `/` route.
- `pages/posts/first-post.ts` is associated with `/posts/first-post` route.

### Link Component
In Next.js the `Link` Component form `next/link` is used to wrap an `<a>` tag.
`<Link>` allows to do client-side navigaiton to a different page in the application.

Link accepts a href and the route.

Link component enables client-side navigation between two pages in the same Next.js app.

## Assets
Next.js can serve static assets, under the top-level `public` directory.
Files inside `public` can be referenced from the root of the application similar to `pages`.
The `public` directory is also useful for `robots.txt`, Google Site Verification and any otehr static assets.

### Images
Next.js provides an `Image` compoennt out of the box to handle this.
Next has support for Image Optimization by default. This allows for resizing, optimizing and serving images in odern formats like WebP.
This avoids shippoing large images to devices with a smaller viewport.
It also allows Next.js to automatically adopt future image formats and serve them.

Instead of optimizing images at buld time, next.js optimizes images on-demand as users request them.
Images are lazy loaded by default. Pages speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport.

## Metadata
Manipulation of metadata of the page, such as the `<title>`
`<title>` is part of the `<head>` HTML tags

`<Head>` is a built in component it allows modification of the `<head>` of a page.
`Head` can be imported from the `next/head` module

# CSS
Regular CSS Modules for Component Scoped Styles...

For global CSS files `pages/_app.tsx` is required!

````
export default function App({ Component, pageProps }) {
        return <Component {...pageProps} />
}
````

This `App` COmponent is the top-level compoennt whic hwill be common across all the different pages. It can keep state when navigating between pages.
Restart dev Server if \_app.tsx is added

Global Css files can be imported by importing them from `pages/_app.tsx` they can NOT be imported from anywhere else.

- create top level styles directory with global.scss
- add html, \*, reset...


## Prerendering and Data Fetching

# Pre-rendering
By default, Next.js pre-renders every page. This means that next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each gtenarted HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and make the page fully interactive.
HYDRATION!

### Check Pre-rendering is happening
- Disable JavaScript in your browser and try accesing the page.

### Two Forms of Pre-rendering
Static Generation and Server-side Rendering.

#### Static Generation
the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.

#### Server-side Rendering
is the pre-rendering method that generates the HTML on each request.

### Per-page Basis
Importantly, Next.js lets you choose which pre-rendering form to use for each page.
Create a hybird app with Static Generation form ost pages and Server-side Rendering for others.

### When to use Static Generation v.s. Server-side Rendering
use Static Generation (with and without data) whenever possible because your page can be bult once and served by CDN, which makes it much faster than having a serverrender the page on every request.

- If you can prerender a page *ahead* of a users request then use Static Generation

Static Generation is NOT a good idea if you cannot pre-render a page ahead of a user request. -- page shows frequently updated data (live ticker)
- Server-side Rendering, will be slower but the pre-rendered page will always be up-to-date or you can skip pre-rendering and use client-side JS to populate frequentliy updated data.

## Static Generation with and without Data 
Static Generation can be done with and without data.

For some pages might not be able to render without fetching external data first.
Access the file system, fetch external API or query database at build time. Next.js supports this case -- Static Generation with data -- out of box.

## Static Generation with Data using `getStaticProps`
In Next.js when a page component is exported you can also export an `async` function called `getStaticProps`.
- `getStaticProps` runs at build time in production, and...
- Inside the function, you can fetch external data and send it as props to the page.

````
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
````

`getStaticProps` tells Next.js "Hey, this page has some data dependencies -- so when you pre-render this apge at build time, make sure to resolve them first!

NOTE: In development mode, `getStaticProps` runs on each request instead.

## Next JS in Steps

[NextJS](NextJS.md)



