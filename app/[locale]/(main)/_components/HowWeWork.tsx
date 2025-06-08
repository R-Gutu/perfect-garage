import Image from "next/image"
export default function HowWeWork() {
    return (<div className="font-montserrat text-center">
        <p className="font-bold text-[45px]">Cum lucrăm cu clienții?</p>
        <p className="text-[#FF001D] text-[20px]">Simplu. Clar. Eficient.</p>
        <div className="grid grid-cols-[2fr_1fr_2fr_1fr_2fr] px-[100px] max-[900px]:px-[10px] max-[900px]:grid-cols-1">
            <div className="flex flex-col items-center">
                <Image src="/svgs/phone.svg" width={150} height={150} alt="phone" />
                <p className="font-bold text-[20px]">APEL</p>
                <p className="">Sunați-ne sau trimiteți-ne un mesaj</p>
            </div>
            <div className="flex justify-center py-[20px] min-[900px]:hidden">
                <Image src="/svgs/down_path.svg" width={15} height={15} alt="path" />
            </div>
            <div className="flex items-center translate-y-[-11%] max-[900px]:hidden">
                <Image src="/svgs/right_path.svg" width={200} height={200} alt="path" />
            </div>
            <div className="flex flex-col items-center">
                <Image src="/svgs/calendar.svg" width={150} height={150} alt="calendar" />
                <p className="font-bold text-[20px]">PROGRAMARE</p>
                <p className="">Oferim consultanță gratuită, stabilim data și ora, precum și costul total al lucrărilor.</p>
            </div>
            <div className="flex justify-center py-[20px] min-[900px]:hidden">
                <Image src="/svgs/down_path.svg" width={15} height={15} alt="path" />
            </div>
            <div className="flex items-center translate-y-[-11%] max-[900px]:hidden">
                <Image src="/svgs/right_path.svg" width={200} height={200} alt="path" />
            </div>
            <div className="flex flex-col items-center">
                <Image src="/svgs/wrench.svg" width={150} height={150} alt="wrench" />
                <p className="font-bold text-[20px]">REPARAȚIE</p>
                <p className="">Diagnosticare și reparații auto în service-ul nostru.</p>
            </div>
        </div>
        <div className="flex justify-center py-[20px] min-[900px]:hidden">
            <Image src="/svgs/down_path.svg" width={15} height={15} alt="path" />
        </div>
        <div className="flex justify-center min-[900px]:pt-[100px]">
            <div className="flex flex-col items-center w-[20%] max-[900px]:w-full">
                <Image src="/svgs/money.svg" width={150} height={150} alt="money" />
                <p className="font-bold text-[20px]">ACHITARE</p>
                <p className="">Lucrările sunt finalizate. Clientul verifică mașina și efectuează plata.</p>
            </div>
        </div>
    </div>)
}