'use client';
import { useEffect, useRef } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

const Fullpage = ({ children }) => {
    const instanceRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            instanceRef.current = new fullpage('#fullpage');
        }
        return () => {
            if (instanceRef.current) {
                instanceRef.current.destroy('all');
            }
        };
    }, []);

    return <div id="fullpage">{children}</div>;
};

export default Fullpage;
