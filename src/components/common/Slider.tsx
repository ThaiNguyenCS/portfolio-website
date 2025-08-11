import React, { useEffect, useRef } from "react";
import styles from "./Slider.module.css";

type Direction = "ltr" | "rtl";

export default function Slider({ children, direction }: { children: React.ReactNode; direction: Direction }) {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        // Quãng đường bạn dịch: ở keyframes là 50% width của track
        const distancePx = el.scrollWidth * 0.5; // = 50%
        const speed = 60;
        const durationSec = distancePx / speed;
        el.style.setProperty("--duration", `${durationSec}s`);
    }, []);

    return (
        <div className="w-full overflow-hidden relative">
            <div ref={trackRef} className={`${styles[`${direction}-slider-track`]} flex items-center gap-10 w-max hover:[animation-play-state:paused]`}>
                {children}
                {children}
            </div>
        </div>
    );
}
