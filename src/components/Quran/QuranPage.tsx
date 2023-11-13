import React, { useState, useEffect } from 'react';

import { Surah, SurahResponse } from '../Types/surahTypes';
const QuranPage: React.FC = () => {
   const [surahs, setSurahs] = useState<Surah[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
     // Fetch Surahs from the API
     const fetchSurahs = async () => {
       try {
             const response = await fetch('http://localhost:8080/api/surahs/allsurahs');
             if (!response.ok) {
               throw new Error('Network response was not ok');
             }
             const data: SurahResponse = await response.json();
             setSurahs(data.data); // Assuming the response has a `data` field that is an array of Surahs
           } catch (error) {
             console.error('There has been a problem with your fetch operation:', error);
           }
           setLoading(false);
         };
     fetchSurahs();
   }, []);

   if (loading) {
     return <div>Loading...</div>;
   }

   return (
     <div>
       <h1>Surahs</h1>
       <ul>
         {surahs.map((surah: Surah) => (
           <li key={surah.number}>
             {surah.number}. {surah.englishName} - {surah.englishNameTranslation}
           </li>
         ))}
       </ul>
     </div>
   );
};

export default QuranPage;
