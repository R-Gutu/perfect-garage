'use client'
import { useLocale } from "next-intl";
import { useEffect } from "react";

export default function Widget() {
  const locale = useLocale() as 'ro' | 'ru';

  useEffect(() => {
    const scripts: Record<'ro' | 'ru', string> = {
      'ro': 'https://cdn-ru.bitrix24.ru/b31886438/crm/site_button/loader_8_0nu8yh.js',
      'ru': 'https://cdn-ru.bitrix24.ru/b31886438/crm/site_button/loader_4_hsk47i.js'
    };
    // Delete the Bitrix24 script on locale change
    const existingScript = document.querySelector(':has(> .b24-widget-button-shadow)');
    if (existingScript) {
      existingScript.remove();
    }
    const s = document.createElement('script'); s.async = true; s.src = scripts[locale] + '?' + (Date.now() / 60000 | 0);
    const h = document.getElementsByTagName('script')[0];
    if (h && h.parentNode) {
      h.parentNode.insertBefore(s, h);
    }
  }, [locale]);

  return (<></>)
}
