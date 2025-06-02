// 'use client';

// import { useState, useEffect } from 'react';
// import { setCookie, getCookie } from 'cookies-next';

// type Language = {
//   code: string;
//   label: string;
// };

// const LanguageDropdown = () => {
//   const languages: Language[] = [
//     { code: 'en', label: 'English' },
//     { code: 'es', label: 'Spanish' },
//   ];

//   const [selectedLang, setSelectedLang] = useState<string>('en');


//   useEffect(() => {
//     const initializeLanguage = () => {
//       try {

//         const cookieLang = getCookie('lang');
//         if (cookieLang && languages.some(lang => lang.code === cookieLang)) {
//           setSelectedLang(cookieLang as string);
//           return;
//         }


//         const browserLang = navigator.language.split('-')[0];
//         const validLang = languages.some(lang => lang.code === browserLang) 
//           ? browserLang 
//           : 'en';
        
//         setSelectedLang(validLang);
//         setCookie('lang', validLang);
//       } catch (error) {
//         console.error('Error initializing language:', error);
//         setCookie('lang', 'en');
//       }
//     };

//     initializeLanguage();
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const newLocale = e.target.value;
//     try {
//       setSelectedLang(newLocale);
//       setCookie('lang', newLocale);
//       window.dispatchEvent(new Event('languageChanged'));
//     } catch (error) {
//       console.error('Error saving language preference:', error);
//     }
//   };

//   return (
//     <select 
//       value={selectedLang} 
//       onChange={handleChange} 
//       className="p-2 border rounded bg-white text-gray-800 dark:bg-gray-700 dark:text-white"
//       aria-label="Select language"
//     >
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

import { useEffect, useState } from 'react';
import { setCookie, getCookie } from 'cookies-next';

type Language = {
  code: string;
  label: string;
  icon?: string;
};

type LanguageDropdownProps = {
  onChangeLanguage: (langCode: string) => void;
  currentLanguage: string;
  className?: string;
};

const DEFAULT_LANGUAGE = 'en';

const LanguageDropdown = ({ 
  onChangeLanguage, 
  currentLanguage, 
  className = '' 
}: LanguageDropdownProps) => {
  const languages: Language[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    // Add more languages as needed
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setCookie('lang', newLocale, { 
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
      sameSite: 'lax'
    });
    onChangeLanguage(newLocale);
  };

  return (
    <select
      value={currentLanguage}
      onChange={handleChange}
      className={`p-2 border rounded bg-white text-gray-800 dark:bg-gray-700 dark:text-white ${className}`}
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