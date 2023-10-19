import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';
import { Footer } from './components/Footer';
import './style/main.scss';
function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
