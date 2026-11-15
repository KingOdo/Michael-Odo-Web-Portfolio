import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const sectionId = decodeURIComponent(hash.slice(1));

      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}