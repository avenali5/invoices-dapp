import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MathUtils } from "three";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

export const starsAnimation = (starsRef: Props) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom center",
        // markers: true,
        scrub: true,
      },
    })
    .to(starsRef.position, {
      x: 0,
      y: -5,
      z: 0,
    });
};
