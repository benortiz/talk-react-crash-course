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

## React

1. Increase cohesion between related HTML/CSS/JS.
1. One-way flow of data.

---

## React
### Cohesion

```javascript
function TodoItem(props) {
  return (
    <li onClick={handleOnClick}>{props.itemName}</li>
  )
}

function handleOnClick() {
  console.log('clicked!');
}
```

^ JSX is how we get HTML in our JS
^ We'll get back to CSS shortly

---

## React
### Data Flow

`props` are the arguments passed to every component from the component above it.

There is no way to pass information upwards.

---

## React
### Data Flow

A component can also have internal state. This is useful for keeping UI or
tranitory state that is only useful to one specific component.

---

## React
### Data Flow

```javascript
class TodoItem extends Component {
  state = {
    active: false,
  }
  
  handleMouseOver() {
    this.setState({
      active: true,
    });
  }

  render() {
    <li 
      className="{this.state.active ? 'active' : 'inactive'}"
      onMouseOver={handleMouseOver}>
      {this.props.itemName}
    </li>
  }
}
```

---
## React
### Cohesion

Back to CSS

```javascript
import styles from "./Item.styles";

function Item(props) {
  return (
    <li className={styles.item}>{props.itemName}</li>
  )
}
```

---

## React
### Cohesion

Container/Presentational Components

---

## Putting it all together

```
src/
|__ Todo/
    |__ Item/
    |   |__ Item.js
    |   |__ Item.styles.css
    |__ List/
    |__ Todo.js
```

---
