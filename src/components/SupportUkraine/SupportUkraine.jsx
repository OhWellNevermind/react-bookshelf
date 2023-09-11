import React from 'react';

const supporters = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: new URL('/src/images/saveChildren.png', import.meta.url),
    img2x: new URL('/src/images/saveChildren@2x.png', import.meta.url),
    idx: '01',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: new URL('/src/images/projectHope.png', import.meta.url),
    img2x: new URL('/src/images/projectHope@2x-1.png', import.meta.url),
    idx: '02',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: new URL('/src/images/medcalCorps.png', import.meta.url),
    img2x: new URL('/src/images/medicalCorps@2x-3.png', import.meta.url),
    idx: '03',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: new URL('/src/images/razom.png', import.meta.url),
    img2x: new URL('/src/images/razom@2x-5.png', import.meta.url),
    idx: '04',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: new URL('/src/images/againtHunger.png', import.meta.url),
    img2x: new URL('/src/images/againtsHunger@2x-6.png', import.meta.url),
    idx: '05',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: new URL('/src/images/prytula.png', import.meta.url),
    img2x: new URL('/src/images/prytula@2x-8.png', import.meta.url),
    idx: '06',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: new URL('/src/images/medicus.png', import.meta.url),
    img2x: new URL('/src/images/medicus@2x-4.png', import.meta.url),
    idx: '07',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: new URL('/src/images/worldVision.png', import.meta.url),
    img2x: new URL('/src/images/worldVision@2x-7.png', import.meta.url),
    idx: '08',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: new URL('/src/images/united.png', import.meta.url),
    img2x: new URL('/src/images/united@2x-2.png', import.meta.url),
    idx: '09',
  },
];

export const SupportUkraine = () => {
  return (
    <div className="support-ukraine-bg pl-10 pt-[26px] pb-[24px] rounded-[18px] w-[356px] h-[474px] ">
      <p className="mb-[42px] text-[24px] text-[#fff] font-bold tracking-[-0.96px] leading-[1.16]">
        Support Ukraine
      </p>
      <ul className=" flex flex-col gap-5 w-max h-[292px] overflow-y-scroll ">
        {supporters.map(({ title, url, img, img2x, idx }) => {
          return (
            <li key={idx}>
              <div className="flex items-center gap-[14px]">
                <p className="text-[#fff]">{idx}</p>
                <a className="" href={url}>
                  <img
                    className="brightness-0 invert hover:brightness-100 hover:invert-0"
                    srcSet={`${img}, ${img2x}`}
                    src={img}
                    alt={title}
                  />
                </a>
              </div>
            </li>
          );
        })}
      </ul>
      <button>scroll</button>
    </div>
  );
};
