import { useEffect, useRef } from "react";

export function AutoBgm() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const unlock = async () => {
            if (!audioRef.current) return;
            try {
                audioRef.current.volume = 0.7;
                await audioRef.current.play();
                window.removeEventListener("pointerdown", unlock);
                window.removeEventListener("keydown", unlock);
            } catch {
                console.error("Failed to play audio");
            }
        };
        window.addEventListener("pointerdown", unlock);
        window.addEventListener("keydown", unlock);
        return () => {
            window.removeEventListener("pointerdown", unlock);
            window.removeEventListener("keydown", unlock);
        };
    }, []);

    return <audio ref={audioRef} src="/uia.mp3" loop preload="none" />;
}
