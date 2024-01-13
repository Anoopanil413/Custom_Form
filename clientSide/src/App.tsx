import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateForm from './features/form/CreateForm'
import SubmittedForms from './features/form/SubmittedForms'
import ViewForm from './features/form/ViewForm'
import Landing from './features/form/Landing'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />

        <Route path="/forms/:formId" element={<ViewForm />} />
        <Route path="/viewForms" element={<SubmittedForms />} />
        <Route path='/createForm' element={<CreateForm />} />

      </Routes>

    </>

  )
}

export default App
