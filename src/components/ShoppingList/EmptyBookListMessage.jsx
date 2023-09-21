import React from 'react';

const emptyImgUrl = new URL(
  '/src/images/empty_shopping_list.png',
  import.meta.url
);
const emptyImgUrl2x = new URL(
  '/src/images/empty_shopping_list@2x.png',
  import.meta.url
);

export const EmptyBookListMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full pt-[120px]">
      <p className="text-[#00000099] dark:text-[#ffffff99] text-center mb-[14px] max-w-[349px] leading-[1.28] md:leading-[1.33] tracking-[-0.28px] md:tracking-[-0.36px]">
        This page is empty, add some books and proceed to order.
      </p>
      <img
        srcSet={`${emptyImgUrl2x} 2x`}
        src={emptyImgUrl}
        alt="empty message"
      />
    </div>
  );
};
