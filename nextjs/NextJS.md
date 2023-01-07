## Overview

[1. NextJS](#what-is-next-js)
[1.1 What is NextJS](#what-is-nestjs)
[1.2 Features](#features)
[1.3 Creationg NextJS Project](#creating-a-nextjs-project)

[2. Pages & File-based Routing](#pages-&-file-based-routing)
[2.1 Dynamic Paths & Routes](#dynamic-paths-&-routes)

## What is NextJS

NextJS is a React Fullstack Framework for Production.

### Features

1. Server-side Page (Pre-)Rendering

- Preparing the content of a page on the Server.
- Search Engine Crawlers can pick up content
- Build in Prerendering
- Great for SEO
- Better inital load experience

2. File-based Routing

- Define pages and routes with files and folders
- Loess code, less work,, highly understandable

3. Build Fullstack REact Apps!

- Easily add backend (server-side) code to your Next / React apps
- Storing data, getting data, authentication etc. can be added

### Creating a NextJS Project

- CLI Tool to create a new project
- `yarn create next-app --typescript`

## Pages & File-based Routing

- React Component Files and let NextJS infer the routes form the folder structure
- speacial /pages folder
- [].tsx - bracket notation - special path for dynamic routes
- filenames in /pages will be used as path names
- for nested paths the file structure has to reflect that structure

### Dynamic Paths & Routes

- [id].js - Always Square Brackets with `any` identifier
- if a static file is present it will be prefered over the placeholder
- `useRouter from next/router` has to be imported
- this hook provides various information about the route - the query property provides the encoded information form the url

#### Dynamic Paths with Dynamic Folder Name

clients/[id]/ as folder name

- import the useRouter to access the information from the url

### Adding Catch-All Routes

- [...slug] - next js ... in cury brackets with placehodler is a catch all route component

### Navigating with the "Link" Component

- import Link from 'next/link'
- Link is a Component - replacement for Anchor Tag - Prefetches Data as soom as we hover over link

### A Different Way oOf Setting Link Hrefs

- Instead of providing a string to Link href you can provide an Object to the Link Component
- ```{
  pathname: '/clients/[id]'
  query: { id: client.id }
  }
  ```

### Navigating Programmatically

- router.push - is like link component but prgrammatically
- router.replace
- can also accept objects as props

### Adding a custom 404 Page

- Add special file in `pages` 404.js - Loads Component when 404 Error arrises.

## Page Pre-Rendering & Data Fetching

By default, NextJS pre-renders all pages (~ server-side rendering: SSR)

### Traditional React App Data Fetching

A traditional React App has an empty HTML the page is rendered inside a wrapper tag, thats bad for SE-Crawlers.
Data is fetched after the component was rendered to the screen.
The inital response does not yet contain data.

## How NextJS Prepares ^ Pre-renders Pages

NextJS returns a pre-rendered page.

- Good for SEO
- Hydrate with React code once loaded. (Prerendered page gets returned react-code gets inserted) => Page is interactive.
- Pre-rendering only affects the first page. Once the page is hydrated it is a standart SPA ONLY the inital page is prerendered.
- There are two forms of Pre-Rendering.

## Static Generation

- Pre-generate a page (with data prepared on the server-side) during build time.
- Pages are prepared ahead of time and can be chached by the server / CDN serving the app.
- async function getSTaticProps(context) {...}
  - in this function any code which would usually run on the server can be run.
  - code written in this scope will not be included in the data which is sent to the client.
