import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateForm from './features/form/CreateForm'
import SubmittedForms from './features/form/SubmittedForms'
import ViewForm from './features/form/ViewForm'

function App() {

  return (
    <>
      {/* <CreateForm /> */}
      <SubmittedForms />
      <Routes>
        <Route path="/forms/:formId" element={<ViewForm />} />
        <Route path="/" element={<SubmittedForms />} />
      </Routes>
    </>

  )
}

export default App
