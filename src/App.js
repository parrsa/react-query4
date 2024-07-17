import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import UserPage from './components/usersPage';
import UsersDetails from './components/UserDetails';
import Form from './components/Form';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/users' element={<UserPage />} />
        <Route path='/users/:id' element={<UsersDetails />} />
        <Route path='/Form' element={<Form />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
