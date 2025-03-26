import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Header.css';

const Header = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const text = titleRef.current.textContent;
        titleRef.current.innerHTML = text
            .split("")
            .map(letter => letter === " " ? "&nbsp;" : `<span>${letter}</span>`)
            .join("");

        gsap.from(titleRef.current.children, {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.05, 
            ease: "power2.out"
        });
    }, []);

    return (
        <div className="header">
            <div className="header-contents">
                <h2 ref={titleRef}>Order your favorite food</h2>
                <p ref={titleRef}>
                    Choose from a diverse menu featuring a delectable array of dishes crafted with 
                    the finest ingredients and culinary expertise.
                </p>
                <button>View Menu</button>
            </div>
        </div>
    );
};

export default Header;
