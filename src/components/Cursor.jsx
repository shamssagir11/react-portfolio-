import "./Cursor.css";
import { useEffect } from "react";

function Cursor() {

    useEffect(() => {

        const cursor = document.querySelector(".cursor");

        const move = (e) => {

            cursor.style.left = e.clientX + "px";

            cursor.style.top = e.clientY + "px";

        }

        const enter = () => {

            cursor.classList.add("cursor-grow");

        }

        const leave = () => {

            cursor.classList.remove("cursor-grow");

        }

        window.addEventListener("mousemove", move);

        document
            .querySelectorAll("a,button")
            .forEach((item) => {

                item.addEventListener("mouseenter", enter);

                item.addEventListener("mouseleave", leave);

            });

        return () => {

            window.removeEventListener("mousemove", move);

        }

    }, []);

    return (

        <div className="cursor"></div>

    )

}

export default Cursor;