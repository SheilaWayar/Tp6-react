import Contador from './components/Contador'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import ContactForm from './components/ContactForm'
import TodoApp from './components/TodoApp'
import './components/Card.css'

function App() {
  return (
    <>
      <Header />
      
      <main style={{padding: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
        
        <Contador/>

        <hr style={{margin: '2rem 0', border: 'none', borderTop: '1px solid #d4a5a5'}} />

        {/* 1. Productos */}
        <ProductList />

        <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #d4a5a5'}} />

        {/* 2. To-Do App */}
        <TodoApp />

        <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #d4a5a5'}} />

        {/* 3. Form */}
        <ContactForm id="contacto" />

      </main>
      
      <Footer />
    </>
  )
}

export default App