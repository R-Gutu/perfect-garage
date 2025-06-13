import Image from "next/image"
import Link from "next/link"
export default function Socials() {
    const socials = [
        {
            link: "https://www.facebook.com/perfectgarage.md/",
            image: "/svg/facebook.svg",
            name: "facebook"
        },
        {
            link: "https://www.instagram.com/perfect.garage.md/",
            image: "/svg/instagram.svg",
            name: "instagram"
        },
        {
            link: "https://wa.me/37360410999",
            image: "/svg/whatsapp.svg",
            name: "whatsapp"
        }
    ]
    return (<div className="flex flex-col gap-2 fixed right-[58px] bottom-[120px]">
        {socials.map(({link, image, name}, i) => (<Link href={link} className="cursor-pointer hover:scale-120 transition-transform" target="blank">
            <Image src={image} alt={`${name} icon`} width={50} height={50} />
        </Link>))}
    </div>)
}