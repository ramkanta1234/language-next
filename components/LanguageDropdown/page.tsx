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
import styled from 'styled-components';

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
    { code: 'en', label: 'English', icon: "/image/en_flag.webp" },
    { code: 'es', label: 'Español',icon: "/image/es_flag.webp" },
    // Add more languages as needed
  ];
    const [open, setOpen] = useState(false);
    const [showLang, setShowLang] = useState('English');

  const handleChange = (e: any) => {
    const newLocale = e.code;
    setShowLang(e.label)
    console.log("Selected language:", e);
    
    setCookie('lang', newLocale, { 
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
      sameSite: 'lax'
    });
    onChangeLanguage(newLocale);
  };

  return (
    <>
    {/* <select
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
    </select> */}

    


<DropD>
  <div className="dropdown">
    <button onClick={() => setOpen(!open)} className="toggle">
      EN | ES
    </button>
    {open && (
      <ul className="menu">
        {languages.map((lang) => (
          <li key={lang.code} onClick={() => handleChange(lang)}>
              <img src={lang.icon} alt={lang.code} />
            {lang.label}
          </li>
        ))}
      </ul>
    )}
  </div>
</DropD>


    </>
  );
};

export default LanguageDropdown;


const DropD = styled.div`
.dropdown {
  position: relative;
  display: inline-block;
}

.toggle {
  padding: 6px;
  background-color: #f2f2f2;
  border: none;
  cursor: pointer;
  font-weight: bold;
  width: 80px;
}

.menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: #0e0e0e;
  border-radius: 8px;
  padding: 8px 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  z-index: 10;
  width: 160px;
}

.menu li {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  color: white;
  font-size: 14px;
  cursor: pointer;
}

.menu li:hover {
  background: #333;
}

.menu img {
  width: 20px;
  height: 14px;
  margin-right: 8px;
  object-fit: contain;
}


`