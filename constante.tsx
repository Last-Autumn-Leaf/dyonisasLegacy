import Image from 'next/image';
import logo from "public/images/Logo B.svg"
import bg from "public/images/bg_hero_img.png"
export const LOGO = () => {
  return <Image src={logo} alt="Logo" 
  width={100} height={75}/>;
};

export const HERO_BG = () => {
    return (
        <Image
          src={bg}
          alt="background image"
          fill
          style={{objectFit:"cover",opacity: 0.5 }}
        />
    );
  };

