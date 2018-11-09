import MenuDefault from '../components/menu/menu.js'
import FooterDefault from '../components/footer/footer.js'
import Home from '../components/home/home.js'

const Index = () => (
  <div>
    <style>
      @import url('https://fonts.googleapis.com/css?family=Chonburi|Prompt');
    </style>
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/butler" type="text/css"/>
    <MenuDefault activeItem='Home' />
    <Home />
    <FooterDefault/>
  </div>
)

export default Index