import './App.css'
import Accordion from './components/Accordion'
import Chips from './components/Chips'
import ToDoList from './components/ToDoList'

const items = [
  {
    title: "Title 1",
    content: "Content 1"
  },
  {
    title: "Title 2",
    content: "Content 2"
  },
  {
    title: "Title 3",
    content: "Content 3"
  },
  {
    title: "Title 4",
    content: "Content 4"
  },
  {
    title: "Title 5",
    content: "Content 5"
  }
]

function App() {
  return (
    <>
      <Chips />
      <hr />
      <ToDoList />
      <hr />
      <Accordion items={items} />
    </>
  )
}

export default App
