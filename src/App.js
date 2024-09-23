import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import List from './pages/List/List'
import SinglePage from './pages/SinglePage/SinglePage'
import NewPage from './pages/NewPage/NewPage'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='users'>
            <Route index element={<List/>}/>
            <Route path=':userId' element={<SinglePage/>}/>
            <Route path='new' element={<NewPage/>}/>
          </Route> 
          <Route path='products'>
            <Route index element={<List/>}/>
            <Route path=':productId' element={<SinglePage/>}/>
            <Route path='new' element={<NewPage/>}/>
          </Route> 
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



