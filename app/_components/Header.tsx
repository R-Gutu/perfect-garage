import Image from "next/image"

const Header = () => {
  return (
    <div>
        <Image src='/image/logo.png' width={50} height={50} alt="logo"/>
        <ul>
            <li>Despre noi</li>
            <li>Servicii</li>
            <li>De ce noi</li>
            <li>Recenzii</li>
            <li>Cum lucram cu clientii</li>
            <li>Contacte</li>
        </ul>
        <div className="">Ro</div>
    </div>
  )
}

export default Header