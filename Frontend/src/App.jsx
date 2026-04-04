import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import Navbar from './Navbar'

const App = () => {
  return (

    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
         <Route path='/create-post' element={<CreatePost />} />
         <Route path='/' element={<Feed />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App