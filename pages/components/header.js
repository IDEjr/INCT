import Logo from '../../public/image_10.png'

function Header() {
  return (
    <div>
      <img src={Logo} alt='logo'></img>
      <h1>Hello World</h1>
    </div>
  );
}

export default Header;