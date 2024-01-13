import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateForm from './features/form/CreateForm'
import SubmittedForms from './features/form/SubmittedForms'
import ViewForm from './features/form/ViewForm'

function App() {

  return (
    <>
      <Routes>

        <Route path="/forms/:formId" element={<ViewForm />} />
        <Route path="/viewForms" element={<SubmittedForms />} />
        <Route path='/createForm' element={<CreateForm />} />

      </Routes>

    </>

  )
}

export default App
