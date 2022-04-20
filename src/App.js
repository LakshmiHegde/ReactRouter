import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import {Products} from "./Components/Products";
import {NewItems} from "./Components/NewItems";
import {Featured} from "./Components/Featured";
import {Users} from "./Components/Users";
import {UserDetails} from "./Components/UserDetails";
import React from "react";
//dynamic import
//it takes a func lazy, that accepts one more fun as parameter that imports the component
const LazyPage = React.lazy(
    ()=>import('./Components/LazyLoad')
)
function App() {
  return (
     <div>
       <NavBar/> {/* iif you specify here, then , this class appears constant throughout navigation*/}
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='about' element={<About/>}/>
         {/*<Route path='nav' element={<NavBar/>}></Route>*/}
         <Route path='products' element={<Products/>}>
             {/* it builds the path automatically like , products/New or products/Featured*/}
             <Route index element={<Home/>}/>{/* displays this page, when /products is seen */}
             <Route path='New' element={<NewItems/>}></Route>
             <Route path='Featured' element={<Featured/>}></Route>
         </Route>
         <Route path='users' element={<Users/>}/>
         <Route path='users/:userId' element={<UserDetails/>}/> {/*this matches anything following users/ , it can be string val or integer or whatever.
         sso it act as dynamic route.
         but before calling this , it checks if there is another page with /users/dynamic-value if so, it calls that page.
          If not, then it calls this.
          To extract userId, in userdetails page, you import useParams hook.
          ref userdetails.js for details*/}
          <Route path='/lazy' element={
              <React.Suspense fallback="Loading..">
                  <LazyPage/>
              </React.Suspense>
              }>
          </Route>
       </Routes>
     </div>

  );
}

export default App;
