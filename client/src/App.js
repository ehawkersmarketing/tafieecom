import React from "react";
import Signup from "./app/pages/Signup/Signup";
import Login from "./app/pages/Login/Login";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routers>
        <Routes>
          <Route path="/auth/login" exact element={<Login />} />
          <Route path="/auth/signup" exact element={<Signup />} />
          {/* <Route path="/auth/register" exact element={<SignUp />} /> */}
          {/* <Route path='/viewCart' element={<ViewCart />} /> */}
          {/* <Route path="/" exact element={<DashBoard />} />
          <Route path="/createProduct" exact element={<CreateProduct />} />
          <Route path="/blog/composeBlog" exact element={<ComposeBlog />} />
          <Route path="/updateBlog/:id" exact element={<UpdateBlog />} />
          <Route path="/resourceCenter" exact element={<ResourceCenter />} /> */}
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
