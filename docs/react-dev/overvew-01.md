# [Describing the UI](https://react.dev/learn/describing-the-ui)

React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components.

## In this chapter

- How to write your first React component
- When and how to create multi-component files
- How to add markup to JavaScript with JSX
- How to use curly braces with JSX to access JavaScript functionality from - your components
- How to configure components with props
- How to conditionally render components
- How to render multiple components at a time
- How to avoid confusing bugs by keeping components pure

### Your first component

React applications are built from isolated pieces of UI called components. A React component is a JavaScript function that you can sprinkle with markup. Components can be as small as a button, or as large as an entire page.

=> Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI), which makes them the perfect place to start your React journey!

Recap
You’ve just gotten your first taste of React! Let’s recap some key points.

React lets you create components, reusable UI elements for your app.

In a React app, every piece of UI is a component.

React components are regular JavaScript functions except:

Their names always begin with a capital letter.
They return JSX markup.

### Importing and Exporting Components

The magic of components lies in their reusability: you can create components that are composed of other components. But as you nest more and more components, it often makes sense to start splitting them into different files. This lets you keep your files easy to scan and reuse components in more places.

```
Gallery.js

// Exports the Profile component as a named export called Profile.
// Exports the Gallery component as a default export.

export function Profile() {
    return (
        <img src='...'>
    );
}

export default function Gallery() {
    return (
        <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
        </section>
  );
}
```

### Writing Markup with JSX

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

- JSX: Putting markup into JavaScript:
  Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why in React, rendering logic and markup live together in the same place—components.

_**`Note: `**_ JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.

- Converting HTML to JSX

**Suppose that you have some (perfectly valid) HTML:**

```
<h1>Hedy Lamarr's Todos</h1>
<img
  src="https://i.imgur.com/yXOvdOSs.jpg"
  alt="Hedy Lamarr"
  class="photo"
>
<ul>
    <li>Invent new traffic lights
    <li>Rehearse a movie scene
    <li>Improve the spectrum technology
</ul>
```

**And you want to put it into your component:**

```
export default function TodoList() {
  return (
    // ???
  )
}
```

**If you copy and paste it as is, it will not work:**

```
export default function TodoList() {
  return (
    // This doesn't quite work!
    <h1>Hedy Lamarr's Todos</h1>
    <img
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
      class="photo"
    />
    <ul>
      <li>Invent new traffic lights</li>
      <li>Rehearse a movie scene</li>
      <li>Improve the spectrum technology</li>
    </ul>
  );
}
```

- The Rules of JSX

1. Return a single root element:
   _**To return multiple elements from a component, wrap them with a single parent tag.**_

```
<div>
  <h1>Hedy Lamarr's Todos</h1>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    class="photo"
  />
  <ul>
    ...
  </ul>
</div>

// or: you can write <> and </> instead

<>
  <h1>Hedy Lamarr's Todos</h1>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    class="photo"
  />
  <ul>
    ...
  </ul>
</>
```

_**Deep Dive**:_ Why do multiple JSX tags need to be wrapped?

> Answer: JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.

2. Close all the tags

JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>` oranges must be written as `<li>` oranges `</li>`.

```
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>

```

3. camelCase all most of the things!

JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables

```
<img
  src="https://i.imgur.com/yXOvdOSs.jpg"
  alt="Hedy Lamarr"
  className="photo"
/>

```

_**Pitfall**:_ For historical reasons, aria-_ and data-_ attributes are written as in HTML with dashes.;

- Pro-tip: Use a JSX Converter

### JavaScript in JSX with Curly Braces

```
const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
const description = 'Gregorio Y. Zara';


<img
  className="avatar"
  src={avatar}
  alt={description}
/>

```

---
Using curly braces: A window into the JavaScript world 
```
const name = 'Gregorio Y. Zara';
 
<h1>{name}'s To Do List</h1>

//Any JavaScript expression will work between curly braces, including function calls like formatDate():
```

---
Any JavaScript expression will work between curly braces, including function calls like formatDate():

```
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

<h1>To Do List for {formatDate(today)}</h1>
  
```
---
Using “double curlies”: CSS and other objects in JSX 

```
 <ul style={{
    backgroundColor: 'black',
    color: 'pink'
  }}>
    <li>Improve the videophone</li>
    <li>Prepare aeronautics lectures</li>
    <li>Work on the alcohol-fuelled engine</li>
  </ul>
```
---
More fun with JavaScript objects and curly braces 

```
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

### Passing Props to a Component

React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

- Familiar props 

Props are the information that you pass to a `JSX` tag. For example, `className`, `src`, `alt`, `width`, and `height` are some of the props you can pass to an `<img>`:

```
<img
  className="avatar"
  src="https://i.imgur.com/1bX5QH6.jpg"
  alt="Lin Lanying"
  width={100}
  height={100}
/>
```

**Passing props to a component**

```
Step 1: Pass props to the child component

export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}

Step 2: Read props inside the child component

// utils.js
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' + person.imageId + size + '.jpg'
  );
}

import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}
```
---
Specifying a default value for a prop
```
function Avatar({ person, size = 100 }) {
  // ...
}
```
The default value is only used if the `size` prop is missing or if you pass `size={undefined}`. But if you pass `size={null}` or `size={0}`, the default value will not be used.


---
Forwarding props with the JSX spread syntax 
```
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```
---
Passing JSX as children
```
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```


### Conditional Rendering

Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like `if` statements, `&&`, and `? :` operators.

```
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```

---
Conditionally returning nothing with null 

```
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;
```

---
Conditional (ternary) operator (? :) 

```
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```

---
Logical AND operator (&&) 

```
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}



export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```
---

### Rendering Lists

You will often want to display multiple similar components from a collection of `data`. You can use the `JavaScript array methods` to manipulate an `array` of `data`. On this page, you’ll use `filter()` and `map()` with React to filter and transform your array of data into an array of components.

---

### Keeping Components Pure

Some JavaScript functions are pure. Pure functions only perform a calculation and nothing more. By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows.


React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs: