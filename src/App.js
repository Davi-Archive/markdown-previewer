import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const Editor = ({ content, handleTextAreaChange }) => <textarea value={content} onChange={handleTextAreaChange}/>

const Preview = ({content}) => <div id="preview">{content}</div>

const App = () => {
  const [content, setContent] = React.useState("Hello")

  const handleTextAreaChange = (event) => {
    setContent(event.target.value)
  }

  return (
  <div className="main">
    <Editor content={content} handleTextAreaChange={handleTextAreaChange}/>
      <Preview content={content} />
  </div>
   )
}

ReactDOM.render(<App />, document.querySelector('#app'))