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


const FeatImage01 = 'images/features-03-image-01.png';
const FeatImage02 = 'images/features-03-image-02.png';
const FeatImage03 = 'images/features-03-image-03.png';

export const FeatImage=(i:any)=>{
  console.log('test :',i)
  return (<Image 
    className="max-w-full mx-auto md:max-w-none h-auto" 
    src={'/images/features-03-image-0'+i.toString()+'.png'} width={540} height={405} 
    alt={"Features 0"+i.toString()} />)
}