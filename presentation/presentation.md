# React: Crash Course

---

1. Thinking in React
1. React
1. State Management
1. Async Actions

---

# Thinking in React
1. **Cohesion**: Increase cohesion, decrease coupling.
1. **Data Flow**: All data flows in one direction.

---

# Thinking in React
## Cohesion

- Features first, types second.
- Easy to package.

---

# Thinking in React
## Cohesion

```
src/
|__ Form/
    |__ Input/
    |   |__ Input.js
    |   |__ Input.styles.css
    |__ Button/
    |__ Form.js
```

---

# Thinking in React
## Data Flow

- Some point
- Another point

---

# Thinking in React
## Data Flow

Insert example

---

# React

---

# React
## Cohesion

Increase cohesion between related HTML and JS.

```javascript
// Button.js
function Button(props) {
  return (
    <button onClick={handleOnClick}>{props.callToAction}</button>
  )
}

function handleOnClick() {
  console.log('clicked!');
}
```

^ JSX is how we get HTML in our JS

---

# React
## Data Flow

1. All data flows downwards.
1. `props` are the arguments passed to a component from the component above it.
1. There is no<sup>*</sup> way to pass information upwards.

```javascript
function MyForm(props) {
  return(
    // ...
    <Button callToAction="Click here!" />
  )
}
```

---

# React
## Cohesion

If we can increase cohesion between related HTML and JS, why not CSS?

---

# React
## Cohesion

```javascript
import btn from "./Button.styles";

function Button(props) {
  return (
    <button className={btn.primary}>{props.callToAction}</button>
  )
}
```

---


---

