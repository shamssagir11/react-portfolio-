import "./ScrollProgress.css";
import { useEffect, useState } from "react";

function ScrollProgress() {

    const [width, setWidth] = useState(0);

    useEffect(() => {

        const scroll = () => {

            const total = document.documentElement.scrollHeight - window.innerHeight;

            const progress = (window.scrollY / total) * 100;

            setWidth(progress);

        };

        window.addEventListener("scroll", scroll);

        return () => window.removeEventListener("scroll", scroll);

    }, []);

    return (

        <div
            className="progress-top"
            style={{
                width: `${width}%`
            }}
        ></div>

    )

}

export default ScrollProgress;