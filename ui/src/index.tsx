import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/home/home';
import { Route, Routes } from 'react-router-dom'
import RecipeTable from './components/recipe-table/recipe-table';
import RecipeDetails from './components/recipe-detail/recipe-details';
import 'font-awesome/css/font-awesome.min.css';
// import { Auth0Provider } from '@auth0/auth0-react';
<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'></link>
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN!}
      clientId={process.env.REACT_APP_AUTH0_CLIENTID!}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >    </Auth0Provider> */}
      <App />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recipes" element={<RecipeTable />} />
          <Route path="/recipe/detail/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();