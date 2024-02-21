import  { useState } from 'react';
import useTheme  from "../../hooks/useTheme.ts";
import { DarkModeSwitch } from 'react-toggle-dark-mode';


function ThemeToggle() {

    const [colorTheme, setTheme] = useTheme();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light');

    const toggleDarkMode = (checked: boolean) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
           <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} />
        </>
    );
}

export default ThemeToggle;

