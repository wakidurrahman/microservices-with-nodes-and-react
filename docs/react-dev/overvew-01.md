# [Describing the UI]( https://react.dev/learn/describing-the-ui)

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

_**Pitfall**:_ For historical reasons, aria-* and data-* attributes are written as in HTML with dashes.;


- Pro-tip: Use a JSX Converter 