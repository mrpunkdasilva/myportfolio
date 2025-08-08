import EducationSection from "@/components/EducationSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Gustavo Henrique",
  description: "Learn about Gustavo Henrique's academic background and education.",
};

export default function Education() {
  return <EducationSection />;
}
