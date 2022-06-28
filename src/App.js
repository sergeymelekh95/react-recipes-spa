import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { NotFound } from './pages/NotFound';
import { Recipe } from './pages/Recipe';

function App() {
    return (
        <>
            <BrowserRouter basename='/react-recipes-spa'>
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/contacts' element={<Contact />}></Route>
                        <Route path='/category/:name' element={<Category />}></Route>
                        <Route path='/meal/:id' element={<Recipe />}></Route>
                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;