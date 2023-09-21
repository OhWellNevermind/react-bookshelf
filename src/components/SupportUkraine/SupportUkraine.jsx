import clsx from 'clsx';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

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
    height: 15,
  },
];

export const SupportUkraine = ({ page }) => {
  const [isToDown, setIsToDown] = useState(true);
  const list = useRef(null);

  const scroll = () => {
    if (isToDown) {
      list.current.scrollTo({
        top: list.current.offsetTop,
        behavior: 'smooth',
      });
    } else {
      list.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const checkScrollPosition = () => {
    if (
      list.current.scrollHeight -
        list.current.scrollTop -
        list.current.clientHeight <
      140
    ) {
      setIsToDown(false);
    } else {
      setIsToDown(true);
    }
  };

  useEffect(() => {
    list.current.addEventListener('scroll', checkScrollPosition);

    return () => {
      if (list.current !== null) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        list.current.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className={`${page === 'shopping-list' && 'mr-10 hidden lg:block'}`}>
      <div className="flex flex-col support-ukraine-bg pt-[24px] pb-[20px] rounded-[18px] w-[335px] h-[352px] md:h-[474px]">
        <div className="ml-10">
          <p className="mb-[42px] text-[24px] text-[#fff] font-bold tracking-[-0.96px] leading-[1.16]">
            Support Ukraine
          </p>
          <ul
            ref={list}
            className=" flex flex-col gap-5 h-[188px] md:h-[292px] w-[159px] overflow-y-hidden mb-6"
          >
            {supporters.map(({ title, url, img, img2x, idx, height }) => {
              return (
                <li key={idx}>
                  <div className="flex items-center gap-[14px]">
                    <p className="text-[#fff]">{idx}</p>
                    <a href={url}>
                      <img
                        className={clsx(
                          'brightness-0 invert hover:brightness-100 hover:invert-0',
                          height ? `h-[${height}]` : 'h-[32px]'
                        )}
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
        </div>
        <button
          className={clsx(
            'w-[38px] h-[38px] bg-[#fff] rounded-full self-center flex justify-center items-center transition-all',
            {
              'rotate-180': !isToDown,
            }
          )}
          onClick={scroll}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M10.3491 12.2835C10.4344 12.3694 10.5357 12.4376 10.6475 12.4841C10.7592 12.5306 10.879 12.5546 11 12.5546C11.121 12.5546 11.2408 12.5306 11.3525 12.4841C11.4642 12.4376 11.5656 12.3694 11.6508 12.2835L15.8492 8.07596C15.9344 7.99004 16.0358 7.92184 16.1475 7.87531C16.2592 7.82877 16.379 7.80481 16.5 7.80481C16.621 7.80481 16.7408 7.82877 16.8525 7.87531C16.9642 7.92184 17.0656 7.99004 17.1508 8.07596C17.3216 8.2477 17.4174 8.48004 17.4174 8.72221C17.4174 8.96438 17.3216 9.19671 17.1508 9.36846L12.9433 13.576C12.4277 14.0909 11.7287 14.3802 11 14.3802C10.2712 14.3802 9.57227 14.0909 9.05664 13.576L4.84914 9.36846C4.67979 9.19772 4.58432 8.96727 4.5833 8.72679C4.58261 8.60615 4.60573 8.48656 4.65135 8.37487C4.69697 8.26319 4.76418 8.16161 4.84914 8.07596C4.93435 7.99004 5.03574 7.92184 5.14744 7.87531C5.25915 7.82877 5.37896 7.80481 5.49997 7.80481C5.62098 7.80481 5.7408 7.82877 5.8525 7.87531C5.96421 7.92184 6.06559 7.99004 6.15081 8.07596L10.3491 12.2835Z"
              fill="#4F2EE8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
