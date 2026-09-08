import Header from "./components/Header"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import ReviewsList from "./components/ReviewsList"
import Footer from "./components/Footer"
const App = () =>{
  return(

<>
  {/* ==================== HEADER ==================== */}
  <Header />
  {/* ==================== HERO ==================== */}
  <Hero />
  {/* ==================== MENU ==================== */}
  <Menu />
  {/* ==================== REVIEWS ==================== */}
  <ReviewsList />
  {/* ==================== FOOTER ==================== */}
  <Footer />
</>
)
}
export default App
