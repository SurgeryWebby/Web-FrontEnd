import MenuDefault from '../components/menu/menu.js'
import FooterDefault from '../components/footer/footer.js'
import Home from '../components/home/home.js'

const Index = () => (
  <div>
    <MenuDefault activeItem='Home' />
    <Home />
    <FooterDefault/>
  </div>
)

export default Index