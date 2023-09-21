import { ThemeContext } from 'components/contex/ThemeContext';
import useDarkSide from 'hooks/useDarkTheme';
import { useContext, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [colorTheme, setColorTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );
  const { setTheme } = useContext(ThemeContext);

  const toggleDarkMode = checked => {
    setColorTheme(colorTheme);
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} />
    </>
  );
}
