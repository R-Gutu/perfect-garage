'use client'
import { useLocale } from "next-intl";
import { useEffect } from "react";

export default function Widget() {
  const locale = useLocale() as 'ro' | 'ru';

  // Function to fix widget anchor tags
  const fixWidgetAnchors = () => {
    const widgetButtons = document.querySelectorAll('a[data-b24-crm-button-widget]');
    
    widgetButtons.forEach((button) => {
      // Add href if missing
      if (!button.hasAttribute('href')) {
        button.setAttribute('href', '#consultation');
        
        // Prevent default behavior to maintain widget functionality
        button.addEventListener('click', function(e) {
          e.preventDefault();
          // The widget's original click handler should still work
        }, { once: true }); // Use once: true to avoid duplicate listeners
      }
    });
  };

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

    const s = document.createElement('script'); 
    s.async = true; 
    s.src = scripts[locale] + '?' + (Date.now() / 60000 | 0);
    
    // Add load event listener to fix anchors after script loads
    s.onload = () => {
      // Use multiple timeouts to catch the widget at different loading stages
      setTimeout(fixWidgetAnchors, 500);
      setTimeout(fixWidgetAnchors, 1500);
      setTimeout(fixWidgetAnchors, 3000);
    };

    const h = document.getElementsByTagName('script')[0];
    if (h && h.parentNode) {
      h.parentNode.insertBefore(s, h);
    }

    // Also set up a MutationObserver to catch dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Check if any added nodes contain widget buttons
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.querySelector && element.querySelector('a[data-b24-crm-button-widget]')) {
                setTimeout(fixWidgetAnchors, 100);
              }
            }
          });
        }
      });
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, [locale]);

  return (<></>)
}