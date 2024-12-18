const App = ({ initialButtonText, initialButtonStyle }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [classesList, setClassesList] = React.useState(initialButtonStyle)

  const onButtonClick = () => {
    setButtonText(`Changed Text`)
    setClassesList('green-btn')
  }

  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

root.render(<App initialButtonText="Click me default!" initialButtonStyle="default-style"/>)
