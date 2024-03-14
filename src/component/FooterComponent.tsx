import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle 
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className="bg-[#0E7490] rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle className="text-white" title="about" />
              <FooterLinkGroup col>
                <FooterLink className="text-white" href="#">Flowbite</FooterLink>
                <FooterLink className="text-white" href="#">Tailwind CSS</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle className="text-white" title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink className="text-white" href="#">Github</FooterLink>
                <FooterLink className="text-white" href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle className="text-white" title="Legal" />
              <FooterLinkGroup col>
                <FooterLink className="text-white" href="#">Privacy Policy</FooterLink>
                <FooterLink className="text-white" href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright className="text-white" href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon className="text-white" href="#" icon={BsFacebook} />
            <FooterIcon className="text-white" href="#" icon={BsInstagram} />
            <FooterIcon className="text-white" href="#" icon={BsTwitter} />
            <FooterIcon className="text-white" href="#" icon={BsGithub} />
            <FooterIcon className="text-white" href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
