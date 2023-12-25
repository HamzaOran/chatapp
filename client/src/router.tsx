import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { AuthLayout } from './pages/layouts/AuthLayout';
import { AuthProvider } from './context/AuthContext';
import { RootLayout } from './pages/layouts/RootLayout';
import { Home } from './pages/Home';

export const router = createBrowserRouter([
  {
    element: <ContextWrapper />,
    children: [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          {
            path: '/channel',
            children: [{ path: 'new', element: <h1>Yeni Chat</h1> }],
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'signup', element: <Signup /> },
        ],
      },
    ],
  },
]);

export function ContextWrapper() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
