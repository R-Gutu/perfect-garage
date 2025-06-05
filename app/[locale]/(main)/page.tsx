
import { useTranslations } from "next-intl"
const page = () => {
  const t = useTranslations('home');
  return (
    
    <div className="h-[3000px] font-inter">{t('test')}</div>
  )
}

export default page