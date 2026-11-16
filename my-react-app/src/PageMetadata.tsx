import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMetadata: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title: "Dr. Michael Odo | Public Health Physician",
    description:
      "Learn about Dr. Michael Odo, his professional background, public health expertise, and research on tuberculosis and HIV.",
  },
  "/about": {
    title: "About Dr. Michael Odo | Background & Experience",
    description:
      "Explore Dr. Michael Odo’s professional background, education, experience, and areas of expertise.",
  },
  "/portfolio": {
    title: "Dr. Michael Odo | Research & Case Studies",
    description:
      "Explore research featured by Dr. Michael Odo on TB infection control, TB/HIV services, and preventive treatment in Cross River State, Nigeria.",
  },
};

export default function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page =
      pageMetadata[pathname] ?? {
        title: "Page Not Found | Dr. Michael Odo",
        description: "The requested page could not be found.",
      };

    document.title = page.title;

    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content = page.description;
  }, [pathname]);

  return null;
}