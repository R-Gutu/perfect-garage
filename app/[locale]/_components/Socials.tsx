import Image from "next/image"
import Link from "next/link"
export default function Socials() {
    const socials = [
        {
            link: "https://t.me/+37360410999",
            image: "/svg/telegram.svg",
            name: "telegram"
        }

    ]
    return (<div className="flex flex-col gap-2 fixed right-[58px] bottom-[120px]">
        {socials.map(({ link, image, name }, i) => (<Link key={i} href={link} className="cursor-pointer hover:scale-120 transition-transform" target="blank">
            <Image src={image} alt={`${name} icon`} width={50} height={50} />
        </Link>))}
    </div>)
}