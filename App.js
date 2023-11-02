import './App.css';
import Contactus from './Components/Contactus';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Ordersummary from './Components/Ordersummary';
import Products from './Components/Products';
import FeaturedProducts from './Components/FeaturedProducts';
import NewProducts from './Components/NewProducts';
import Profile from './Components/Profile';
import Login from './Components/Login';
import { AuthProvider } from './Components/auth';
import RequireAuth from './Components/RequireAuth';
import Admin from './Components/Admin';
import UserInfo from './Components/UserInfo';
import Users from './Components/Users';
function App() {
  return (
    
    <>
   <AuthProvider>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<Contactus/>} />
      <Route path="order-summary" element = {<Ordersummary/>} />
      <Route path="Products" element = {<Products/>} >
        <Route index element={<NewProducts/>} /> {/*index routing purpose*/}
        <Route path="featured" element={<FeaturedProducts/>} />
        <Route path="new" element={<NewProducts/>} />
        </Route>
        <Route path="users" element={<Users/>}>
          <Route path=":userid" element={<UserInfo />} />
          <Route path="admin" element={<Admin/>}/>
          </Route>
        <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>} />
        <Route path='login' element={<Login />} />
      </Routes>
      </div>
      </AuthProvider>
  
    
    </>
  );
}

export default App;