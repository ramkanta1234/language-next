// 'use client';

// import { useRouter, usePathname } from 'next/navigation';
// import { useState } from 'react';

// const LanguageDropdown = () => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const [selectedLang, setSelectedLang] = useState<string>('en');

//   const languages = [
//     { code: 'en', label: 'English' },
//     { code: 'es', label: 'Spanish' },

//   ];

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const newLocale = e.target.value;
//     setSelectedLang(newLocale);

//     // Assuming your URLs are locale-prefixed like /en/about
//     const segments = pathname.split('/');
//     segments[1] = newLocale;
//     const newPath = segments.join('/');
//     router.push(newPath);
//   };

//   return (
//     <select value={selectedLang} onChange={handleChange} className="p-2 border rounded">
//       {languages.map((lang) => (
//         <option key={lang.code} value={lang.code}>
//           {lang.label}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default LanguageDropdown;
'use client';

import { useState, useEffect } from 'react';
import { setCookie, getCookie } from 'cookies-next';

type Language = {
  code: string;
  label: string;
};

const LanguageDropdown = () => {
  const languages: Language[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
  ];

  const [selectedLang, setSelectedLang] = useState<string>('en');


  useEffect(() => {
    const initializeLanguage = () => {
      try {

        const cookieLang = getCookie('lang');
        if (cookieLang && languages.some(lang => lang.code === cookieLang)) {
          setSelectedLang(cookieLang as string);
          return;
        }


        const browserLang = navigator.language.split('-')[0];
        const validLang = languages.some(lang => lang.code === browserLang) 
          ? browserLang 
          : 'en';
        
        setSelectedLang(validLang);
        setCookie('lang', validLang);
      } catch (error) {
        console.error('Error initializing language:', error);
        setCookie('lang', 'en');
      }
    };

    initializeLanguage();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    try {
      setSelectedLang(newLocale);
      setCookie('lang', newLocale);
      window.dispatchEvent(new Event('languageChanged'));
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  };

  return (
    <select 
      value={selectedLang} 
      onChange={handleChange} 
      className="p-2 border rounded bg-white text-gray-800 dark:bg-gray-700 dark:text-white"
      aria-label="Select language"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageDropdown;