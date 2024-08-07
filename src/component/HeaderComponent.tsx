
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink } from 'flowbite-react';

export default function HeaderComponent() {
  return (
    <Navbar fluid rounded className='shadow-lg'>
      <NavbarBrand  href="https://flowbite.com" >
        <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
