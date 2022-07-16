![Image text](https://github.com/Grulla-Software/search-react/blob/main/img/imgHeading.png)

# search-reactjs 🚀

Search-reactjs component allows the search or filter of objects by specifying a search criteria according to the properties of the object, providing flexibility to the developer at the time of implementation and allowing the fulfillment of the requested requirements.
> The component displays an input text where the user enters the value they want to search for, it also displays the button to start the search action.
This component also allows to perform the search automatically while the user enters the text in the input.

## Installing 🔧
To install the component use the Node Package Manager (npm).
You must open the command console at the root of your project and execute the command:
```
 npm install search-reactjs --save 
```

## Usage 🛠️

Here is an example of how to implement the component:

```jsx
import logo from './logo.svg';
import './App.css';
import SearchReact from 'search-reactjs';
function App() {
  const users = [
    {
      name:'marvin', 
      home:{
        location:'Heredia',
        local:{
          number: 3
        }
      }
    },
    { 
      name:'Jose', 
      home:{
        location:'Puntarenas',
        local:{
          number: 5
        }
      }
    },
    { 
      name:'Mario', 
      home:{
        location:'Cartago',
        local:{
          number: 1
        }
      }
    },
    { 
      name:'Luna', 
      home:{
        location:'San Jose',
        local:{
          number: 2
        }
      }
    },
  ];
  let callBack = (result)=>{
    console.log('result',result);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Component</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>search-react</h2>
        <br/>
        <SearchReact
          listObjects={users}
          btnName={'Search'} 
          placeholder={"Search by name"}
          borderRadius={'2px'}
          fontSize={'17px'}
          searchCriteria={'name'}
          btnHoverBackground={'red'}
          btnHoverTextColor={''}
          hideButton={false}
          callBack={callBack}
        />
      </header>
      
      
    </div>
  );
}

export default App;
```

### Props of styles

Props for component styles are displayed as a table with Name, Type, Default, and Description as headings.

**Required props are marked with `*`.**

| Name         | Type     | Default            | Description                                                                        |
| ------------ | -------- | -------------------| ---------------------------------------------------------------------------------- |
| `inputColor`  | `string`| `blue`             | Indicates the text color for the `input` text element.                             |
| `inputWidth`  | `string`| `200px`            | Indicates the width for the `input` text element.                                  |
| `placeholder` | `string`| `Serach`           | Indicates the placeholder for the `input` text element.                            |
| `height`      | `string`| `30px`             | Indicates the height for the `input` text element and the `button` element.        |
| `borderRadius`| `string`| `5px`              | Indicates the border radius for the `input` text element and the `button` element. |
| `fontSize`    | `string`| ` `                | Indicates the text size for the `input` text element and the `button` element.     |
| `btnColor`    | `string`| `black`            | Indicates the text color for the `button` element.                                 |
| `btnWidth`    | `string`| `100px`            | Indicates the width for the `button` element.                                      |
| `btnBorder`   | `string`| `2px solid #61DAFB`| Indicates the border for the `button` element.                                     |
| `btnHoverBackground`|`string`| `#3dbadc`     | Indicates the background color for hover the `button` element.                     |
| `btnHoverTextColor` | `string`| `#ffff`      | Indicates the text color for hover the `button` element.                           |
| `btnName`     | `string`| `Serach`           | Indicates the name for the `button` element.                                       |

### props for functionality

Props for component functionality are displayed as a table with Name, Type, Default, and Description as headers.

**Required props are marked with `*`.**

| Name               | Type      | Default | Description                                                                        |
| ------------------ | --------- | ------- | ---------------------------------------------------------------------------------- |
| `hideButton`       | `bool`    | `false` | Indicates if the search `button` will be shown.                                    |
| `searchCriteria`\* | `string`  | ` `     | Specify the search criteria.                                                       |
| `listObjects`\*    | `array`   | ` `     | `Array` of objects to be filtered.                                                 |
| `callBack`\*       | `function`| ` `     | `Function` that will receive the `array` of filtered objects.                      |

### Additional usage information

If the component has many states, or if a technical aspect needs more explanation, use this section. Example:

- **Primary**: Use to highlight the most important actions in any experience. Don’t use more than one primary button in a section or screen to avoid overwhelming customers.
- **Secondary**: Used most in the interface. Only use another style if a button requires more or less visual weight.
- **Button with icon**: When words are not enough, icons can be used in buttons to better communicate what the button does.
- **Scary**: Use when the action will delete customer data or be otherwise difficult to recover from. Destructive buttons should trigger a confirmation dialog before the action is completed. Be thoughtful about using destructive buttons because they can feel stressful for customers.
- **Borderless**: Use for less important or less commonly used actions since they’re less prominent.
- **Busy**: Use when a button has been pressed and the associated action is in progress.

### General guidelines

General guidelines should be a list of tips and best practices. Example:

- Use clear and accurate labels. Use sentence-style capitalization.
- Lead with strong, concise, and actionable verbs.
- When the customer is confirming an action, use specific labels, such as **Save** or **Trash**, instead of using **OK** and **Cancel**.
- Prioritize the most important actions. Too many calls to action can cause confusion and make customers unsure of what to do next.

## Related components

This is an unordered list of components that are related in some way. Components are linked to the detail page of that component. Example:

- To group buttons together, use the [ButtonGroup](./button-group) component.
- To use a button with a secondary popover menu, use the [SplitButton](./split-button) component.
- To display a loading spinner with a button, use the [SpinnerButton](../design/spinner-button) component.