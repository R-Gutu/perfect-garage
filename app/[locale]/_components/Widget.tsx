'use client'
import { useLocale } from "next-intl";
import { useEffect } from "react";

export default function Widget() {
  const locale = useLocale();

  useEffect(() => {
    // Delete the Bitrix24 script on locale change
    const existingScript = document.querySelector(':has(> .b24-widget-button-shadow)');
    if (existingScript) {
      existingScript.remove();
    }
    if (locale === 'ro') {
      (function (w, d, u) {
        var s = d.createElement('script'); s.async = true; s.src = u + '?' + (Date.now() / 60000 | 0);
        var h = d.getElementsByTagName('script')[0];
        if (h && h.parentNode) {
          h.parentNode.insertBefore(s, h);
        }
      })(window, document, 'https://cdn-ru.bitrix24.ru/b31886438/crm/site_button/loader_8_0nu8yh.js');
    } else {
      (function (w, d, u) {
        var s = d.createElement('script'); s.async = true; s.src = u + '?' + (Date.now() / 60000 | 0);
        var h = d.getElementsByTagName('script')[0];
        if (h && h.parentNode) {
          h.parentNode.insertBefore(s, h);
        }
      })(window, document, 'https://cdn-ru.bitrix24.ru/b31886438/crm/site_button/loader_4_hsk47i.js');
    }
  }, [locale]);

  return(<></>)
}
