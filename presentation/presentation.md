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

# State Management

---

# State Management
## Data Flow

![inline](https://cdn-images-1.medium.com/max/1600/1*EdiFUfbTNmk_IxFDNqokqg.png)

1. View (React)
1. Dispatch an Action
1. Reducers manipulate the state in Store
1. Re-render -> View

^ say something

---

# State Management
## Data Flow

```javascript
import { inputReducer } from 'components/Form/Input'

const store = createStore({
  input: inputReducer,  
})
```

---

# State Management
## Data Flow

```javascript
// Input.actions.js
const INPUT_CHANGE = 'INPUT_CHANGE';

export function handleChange() {
  return {
    type: INPUT_CHANGE,
    // more information
  }
}
```

---

# State Management
## Data Flow

```javascript
// Input.js
import { handleChange } from './actions';

function Input(props) {
  return (
    <input onChange={handleOnChange}></input>
  )
}

function mapDispatchToProps(dispatch) {
  return({
    hadleOnChange: () => {
      dispatch(handleChange);
    }
  })
}

export default connect(mapStateToProps)(Input)
```
---

# State Management
## Data Flow

![inline](https://cdn-images-1.medium.com/max/1600/1*EdiFUfbTNmk_IxFDNqokqg.png)

1. View (React)
1. Dispatch an Action
1. Reducers manipulate the state in Store
1. Re-render -> View

^ say something

---

# State Management
## Cohesion

```
src/
|__ components/
|   |__ Form/
|       |__ Input/
|       |__ Form.js
|       |__ Form.actions.js
|       |__ Form.reducers.js
|__ store.js
|__ index.js
```

^ We put everything together that is related to a feature.
^ Note the global store.

---

