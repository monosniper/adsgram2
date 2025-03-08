import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(() => {
  AOS.init({
    duration: 600,
    once: false,
  });
});
