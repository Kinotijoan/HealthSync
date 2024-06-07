"use client";
import React, { ReactNode } from "react";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { Container, Engine } from "tsparticles-engine";

const CustomParticles = () => {
    const particlesInit = useCallback(async ( Engine) => {
        console.log(engine);

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (Container) => {
            await console.log(container);
        },
        []
    );
    return (
        <Particles
            id="tsparticles"
            className="absolute z-0 h-[100vh] w-full bg-hero"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                background: {
                    // color: {
                    //   value: "#00000000",
                    // },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 2,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    fpslimit: 200,

                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#00bfff",
                        distance: 100,
                        enable: true,
                        opacity: 1,
                        width: 2,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        value: 150,
                        density: {
                            enable: true,
                            area: 800,
                        },
                        limit: 100,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default CustomParticles;
