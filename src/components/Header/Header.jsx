export const Header = () => {
  return (
    <header className="bg-[#fff] flex w-[calc(100vw - 17px)] px-[24px] py-[24px] justify-between border-[1.5px] border-[#111111] rounded-b-[8px]">
      <div className="logo">Bookshelf</div>
      <div className="flex gap-[20px]">
        <div className="theme-switcher">Toogle Theme</div>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </header>
  );
};
