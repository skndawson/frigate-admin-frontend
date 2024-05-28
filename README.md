<img src="/src/assets/frigate_logo.png" ></img>

# Admin Portal

## VITE - React / Javascript / tailwind

docs:
https://vitejs.dev/
https://tailwindcss.com/docs/installation

### How to start working on the project locally

1. **Clone the Repository**:    
    `git clone https://github.com/username/repo-name.git`
2. **Navigate to the Project Directory**:
    `cd repo-name`
3. **Install Dependencies**:
    `npm install`
4. **Run the Development Server**:
    `npm run dev`





Packages downloaded after initializing the vite project:

```
react-router-dom         
tremor-react.            //Framework for dashboard creation
@headlessui/tailwindcss  //package that needs to be downloaded for tremor
@heroicons/react         //Icons package
@remixicon/react         //Icons package
```


Current project structure

SRC/
---- assets/
---- components/
---- data/
---- pages/
---- Routes/
__ App.jsx
__ main.jsx
__ error-page.jsx





#### These are the steps that were followed to initialize the administration portal with vite

### Setup 

`npm create vite`

Then select a framework : react , Select a variant: Javascript .


from vite + tailwind official documentation https://tailwindcss.com/docs/guides/vite   we follow the next steps

Install `tailwindcss` and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files.

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
``` 


Add the paths to all of your template files in your `tailwind.config.js` file.

```
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainBackgroundColor": '#0D1117'
      }
    },
  },
  plugins: [],
}
```


Then we go to index.css and App.css file and delete the code.
In the App.css file write the following directives:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then install the following library
`npm i tailwind-merge`

and now , we run the server to check it is fine.
`npm run dev`





