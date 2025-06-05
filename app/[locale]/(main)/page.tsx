
import { useTranslations } from "next-intl"
const page = () => {
  const t = useTranslations('home');
  return (
    <div>{t('test')}</div>
  )
}

export default page