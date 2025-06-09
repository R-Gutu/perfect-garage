"use client"
import Image from "next/image"
export default function Footer() {
    const scrollToId = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div id="footer" className="bg-black grid grid-cols-[60%_40%] max-[800px]:grid-cols-1 max-[800px]:gap-10 mt-[50px] rounded-t-[50px] p-[40px] max-[800px]:p-[20px] font-montserrat">
            <div className="flex flex-col gap-10">
                <Image src="/svgs/footer_logo.svg" width={80} height={80} alt="footer logo" />
                <p className="text-[#8F9FA3] w-1/2 max-[800px]:w-full">De la schimburi de ulei de rutină până la reparații complexe ale motorului, oferim o gamă largă de servicii de reparații și întreținere auto pentru a răspunde tuturor nevoilor dvs. într-un singur loc convenabil.</p>
            </div>
            <div className="flex flex-col justify-between gap-[100px] row-span-2">
                <div className="flex flex-wrap gap-2 w-full justify-between text-[#8F9FA3] max-[800px]:flex-col">
                    <p className="cursor-pointer" onClick={() => scrollToId('about')}>Despre noi.</p>
                    <p className="cursor-pointer" onClick={() => scrollToId('services')}>Servicii.</p>
                    <p className="cursor-pointer" onClick={() => scrollToId('whyUs')}>De ce noi.</p>
                    <p className="cursor-pointer" onClick={() => scrollToId('testimonials')}>Recenzii.</p>
                    <p className="cursor-pointer" onClick={() => scrollToId('howWeWork')}>Cum lucrăm cu clienții.</p>
                    <p className="cursor-pointer" onClick={() => scrollToId('footer')}>Contacte.</p>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col gap-10">
                        <div>
                            <p className="font-bold text-[20px]">CONTACTE:</p>
                            <p className="font-bold text-[18px]">Telefon:</p>
                            <p className="text-[#8F9FA3] text-nowrap max-[400px]:text-[12px]">+373 60 410 999 <br />
                                +373 60 410 888 <br />
                                +373 60 911 155</p>
                        </div>
                        <div>
                            <p className="font-bold text-[18px]">Orele de lucru:</p>
                            <p className="text-[#8F9FA3] text-nowrap max-[400px]:text-[12px]">Luni - Vineri: 08:00 - 20:00 <br />
                                Sâmbătă: 08:00 - 16:00</p>
                        </div>
                        <div>
                            <p className="font-bold text-[18px]">ADRESE:</p>
                            <p className="text-[#8F9FA3] text-nowrap max-[400px]:text-[12px]">or.Chișinău, str.Petricani 23/1 <br />
                                or.Chișinău, bd. Moscova 21</p>
                        </div>
                    </div>
                    <div className="self-end justify-self-end text-right w-full text-white">
                        <p>Limbi</p>
                        <div className="flex justify-end gap-5">
                            <p>RU</p>
                            <p className="text-[#8F9FA3]">RO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-end">
                <div className="grid grid-cols-2 gap-2">
                    <Image src="/svgs/facebook.svg" width={50} height={50} alt="facebook" className="cursor-pointer" />
                    <p></p>
                    <Image src="/svgs/instagram.svg" width={50} height={50} alt="instagram" className="cursor-pointer" />
                    <p></p>
                    <Image src="/svgs/telegram.svg" width={50} height={50} alt="telegram" className="cursor-pointer" />
                    <Image src="/svgs/whatsapp.svg" width={50} height={50} alt="whatsapp" className="cursor-pointer" />
                </div>
                <div className="self-end text-center justify-self-center w-full text-[#8F9FA3] px-[15%]">
                    © 2025 Toate drepturile rezervate. Creat de Quant-Apps.
                </div>
            </div>

        </div>)
}