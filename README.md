# Pelusa Service Web App

# Languages

1. **[TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)**
2. **[Sass](https://sass-lang.com/documentation)**

# Frameworks

1. **[React](https://es.reactjs.org/)**

# Requirements

1. Node v18.14.0

# Environment

Required variables to be used on your local development:

- VITE_PELUSA_SERVER

# Create components

This structure required the next steps for standardize code:

- Only use react arrow functional components
- Create folder with **kebab-case**
- Create component with **PascalCase** with extention .TSX
- Create a style file with **PascalCase** and the name of its corresponding component with sass format
- In files use 4 spaces or tabs
- Use semicolon
- Use single quotes
- Use [BEM](http://getbem.com/naming/) naming convention for css class
- Use type **rem measurement** in font size, margin, padding
- Use percentage in width responsive
- If you need others components you have to create a folder with name: **components**
- Create variables, constants or props with **snake_case**
- Create name functions with **camelCase**
- **Components folder** has to be separeted by folders and its name has to be according to function of component
- Only create constants, information texts, redux, models for modules not functionalities
- In constants files create only **ENUMS**
- Code documentation of functions and interfaces, description of what it does and properties

**Example:**

Folder: `new-component`

Component: `NewComponent.tsx`

Style component `NewComponent.scss`

```jsx
//react arrow functional component
const App = () => {
	const greeting = 'Hello Function Component!';

	return <h1>Component</h1>;
};
```

# Commits or branches

- Create branches with `{markup/qa/integration/fix/refactor}/{name-branch}`
- Create commits with `[ADD/FIX/REFACTOR/DELETE] descriptive comment`
