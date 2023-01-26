import { useState, useEffect } from 'react';

export const useStickNav = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);


    const scrollHandler = () => {
        let last_scroll_top = 0;
        let scroll_top = window.scrollY;
        if (scroll_top > last_scroll_top + 20) {
            setScroll(true); //removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            setScroll(false); // removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    }


    return scroll;
}