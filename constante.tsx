import Image from 'next/image';

export const LOGO = () => {
  return <Image src="/images/Logo B.svg" alt="Logo" 
  width={100} height={75}/>;
};

export const HERO_BG = () => {
    return (
        <Image
          src="/images/bg_hero_img.png"
          alt="/background image"
          fill
          style={{objectFit:"cover",opacity: 0.5 }}
        />
    );
  };

