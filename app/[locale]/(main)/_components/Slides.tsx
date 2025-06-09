'use client'
import Carousel from './Carousel';

export default function Slides() {
    const slides = [
        {
            title: `Reputatia noastra
vorbeste pentru noi`,
            description: `Intelegem perfect cat de mult pretuiti automobilul dumneavoastra, iar noi il tratam cu aceeasi grija. Detinem cunostinte profunde a tuturor etapelor de reparatie si intretinere auto.
            
Ne mandrim cu utilizarea echipamentelor profesionale si a pieselor de schimb originale.
            
Echipa noastra este alcatuita din profesionisti dedicati, multi dintre ei fiind specializati pe anumite marci auto.
            
Avem cei mai buni electricieni din oras.
            
Increderea dumneavoastra are cea mai mare valoare pentru noi.`,
            image: "/image/about.png"
        },
        {
            title: `SUNTEM PE PIATA
DIN 2015`,
            description: `Experienta noastra bogata si grija pentru automobilele clientilor nostri se reflecta in calitatea superioara a serviciilor. Oferim toate serviciile, de la simpla schimbare a uleiului pana la reparatii complexe ale motorului, utilizand echipamente certificate de producator.`,
            image: "/image/about2.png"
        },
        {
            title: `ZONA DE REPARATIE
DEPASESTE 1500 mp`,
            description: `Oferim servicii complete pentru orice tip de defectiune auto, inclusiv reparatia motoarelor si pieselor, nu doar inlocuirea lor.

Detinem un depozit propriu de piese si un lift modern pentru ridicarea masinilor.`,
            image: "/image/about3.png"
        },
        {
            title: `ALEGEM PIESELE PENTRU
DUMNEAVOASTRA`,
            description: `Experienta noastra bogata si grija pentru automobilele clientilor nostri se reflecta in calitatea superioara a serviciilor. Oferim toate serviciile, de la simpla schimbare a uleiului pana la reparatii complexe ale motorului, utilizand echipamente certificate de producator.`,
            image: "/image/about4.png"
        },
    ]
    return (
        <div id='about' className='flex flex-col justify-center items-center py-20 w-full relative overflow-hidden'>
            <Carousel slides={slides} />
            <div className='max-[940px]:translate-y-[15px] translate-y-[-15px] grid grid-cols-4 max-[700px]:grid-cols-2 max-[500px]:grid-cols-1 w-full bg-[linear-gradient(180deg,_#FF001D_0%,_#59010B_178.69%)] font-montserrat'>
                <div className='flex flex-col items-center text-center'>
                    <p className='font-bold text-[80px] max-[900px]:text-[60px]'>10</p>
                    <p className='translate-y-[-15px]'>ani de experiență <br /> în reparații auto</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <p className='font-bold text-[80px] max-[900px]:text-[60px]'>&gt;3000</p>
                    <p className='translate-y-[-15px]'>de clienți mulțumiți</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <p className='font-bold text-[80px] max-[900px]:text-[60px]'>60</p>
                    <p className='translate-y-[-15px]'>de specialiști</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <p className='font-bold text-[80px] max-[900px]:text-[60px]'>1400</p>
                    <p className='translate-y-[-15px]'>mp zonă de reparație</p>
                </div>
            </div>
        </div>
    )
}