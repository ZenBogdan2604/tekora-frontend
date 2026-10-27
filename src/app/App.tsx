import { HomePage } from '@/pages/HomePage'
import { Header } from '@/widgets/Header/ui/Header'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
      <Header />


      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
