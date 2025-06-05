
import { useTranslations } from "next-intl"
import Hero from "./_components/Hero";
const page = () => {
  const t = useTranslations('home');
  return (
    <div>
      <Hero />
    </div>
  )
}

export default page