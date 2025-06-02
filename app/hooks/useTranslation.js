// 'use client';
 
// import { useEffect, useState } from 'react';
 
// export function useTranslation(folderName) {

//   const [language, setLanguage] = useState(() => localStorage.getItem('lang') || 'en');

//   const [translations, setTranslations] = useState({});
 
//   useEffect(() => {

//     const loadTranslations = async (lang) => {

//       try {

//         const module = await import(`../message/${folderName}/${lang}.json`);
       

//         setTranslations(module.default);

//       } catch (err) {

//         if (lang !== 'en') {

//           console.warn(`Failed to load ${lang}, falling back to English.`);

//           // fallback to English if not already tried

//           loadTranslations('en');

//         } else {

//           console.error(`Failed to load English translations for ${folderName}`, err);

//           setTranslations({}); // fallback to empty, show keys

//         }

//       }

//     };
 
//     loadTranslations(language);

//   }, [folderName, language]);
 
//   const t = (key) => {

//     return key.split('.').reduce((obj, segment) => obj?.[segment], translations) || key;

//   };
 
//   const changeLanguage = (langCode) => {

//     localStorage.setItem('lang', langCode);

//     setLanguage(langCode);

//   };
 
//   // Optional: sync across tabs

//   useEffect(() => {

//     const onStorage = (e) => {

//       if (e.key === 'lang') {

//         setLanguage(e.newValue || 'en');

//       }

//     };

//     window.addEventListener('storage', onStorage);

//     return () => window.removeEventListener('storage', onStorage);

//   }, []);
 
//   return { t, language, changeLanguage };

// }

//  'use client';

// import { useEffect, useState } from 'react';

// export function useTranslation(folderName) {
//   // Initialize with default language, then update on client-side
//   const [language, setLanguage] = useState('en');
//   const [translations, setTranslations] = useState({});

//   // Initialize language from localStorage (client-side only)
//   useEffect(() => {
//     const storedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
//     setLanguage(storedLang || 'en');
//   }, []);

//   useEffect(() => {
//     const loadTranslations = async (lang) => {
//       try {
//         const module = await import(`../message/${folderName}/${lang}.json`);
//         setTranslations(module.default);
//       } catch (err) {
//         if (lang !== 'en') {
//           console.warn(`Failed to load ${lang}, falling back to English.`);
//           loadTranslations('en');
//         } else {
//           console.error(`Failed to load English translations for ${folderName}`, err);
//           setTranslations({});
//         }
//       }
//     };

//     loadTranslations(language);
//   }, [folderName, language]);

//   const t = (key) => {
//     return key.split('.').reduce((obj, segment) => obj?.[segment], translations) || key;
//   };

//   const changeLanguage = (langCode) => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('lang', langCode);
//     }
//     setLanguage(langCode);
//   };

//   // Sync across tabs (client-side only)
//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const onStorage = (e) => {
//       if (e.key === 'lang') {
//         setLanguage(e.newValue || 'en');
//       }
//     };

//     window.addEventListener('storage', onStorage);
//     return () => window.removeEventListener('storage', onStorage);
//   }, []);

//   return { t, language, changeLanguage };
// }

'use client';

import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';

export function useTranslation(folderName) {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  // Initialize language from cookie
  useEffect(() => {
    const initializeLanguage = () => {
      try {
        const lang = getCookie('lang')?.toString() || 'en';
        setLanguage(lang);
      } catch (error) {
        console.error('Error reading language cookie:', error);
        setLanguage('en');
      }
    };

    initializeLanguage();
  }, []);

  // Load translations
  useEffect(() => {
    const loadTranslations = async (lang) => {
      try {
        console.log(`Loading path: ../message/${folderName}/${lang}.json`);
        const module = await import(`../message/${folderName}/${lang}.json`);
        setTranslations(module.default || {});
      } catch (err) {
        console.error(`Failed to load ${lang} translations:`, err);
        
        // Fallback to English if not already English
        if (lang !== 'en') {
          console.warn('Falling back to English translations');
          loadTranslations('en');
        } else {
          // Even English failed, set empty translations
          setTranslations({});
        }
      }
    };

    if (language) {
      loadTranslations(language);
    }
  }, [folderName, language]);

  const t = (key) => {
    try {
      const result = key.split('.').reduce((obj, segment) => {
        return obj?.[segment];
      }, translations);
      
      return result || key; // Return the key if translation not found
    } catch (error) {
      console.error('Translation error:', error);
      return key;
    }
  };

  const changeLanguage = (langCode) => {
    setLanguage(langCode);
  };

  return { 
    t, 
    language, 
    changeLanguage,
    ready: Object.keys(translations).length > 0 // Indicates if translations are loaded
  };
}