## Styling setup

1. Installation

```sh
npm install tailwindcss @tailwindcss/vite
```

2. vite.config.ts

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
	plugins: [tailwindcss()],
});
```

3. tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

4. import `tailwindcss` in `index.css` file
5. add `SCSS` as a dependancy

```sh
npm add -D sass-embedded
```

5. rename all the `css` file to `scss`

## Font Setup

1. Primary & Secondary font

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap");
```

## Editor Config

1. Add below in config file

```config

[*]
charset = utf-8
end_of_line = lf
indent_style = tab
insert_final_newline = false
tab_width = 3
trim_trailing_whitespace = true

```
