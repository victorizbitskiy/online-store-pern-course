import React from 'react';
import { Routes, Route} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
  const isAuth = false
  return (
    <Routes>
      {isAuth && authRoutes.map(({ path, element }) =>
        <Route key={path} path={path} element={element} exact />
      )}
      {publicRoutes.map(({ path, element }) =>
        <Route key={path} path={path} element={element} exact />
      )}
    </Routes>
  );
};

export default AppRouter;