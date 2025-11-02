import {educations} from "@/data/educations";
import styles from "./style.module.sass";
import Education3D from "./Education3D";

export default function EducationSection() {
  return (
    <section className={styles.educationSection}>
      <header>
        <h2 className={styles.title}>Education</h2>
        <Education3D/>
      </header>

      <div className={styles.educationList}>
        {educations.map((education, index) => (
          <div key={index} className={styles.educationItem}>
            <h3>{education.title}</h3>
            <p className={styles.institution}>{education.institution}</p>
            <p className={styles.period}>{education.period}</p>
            {education.description && (
              <p className={styles.description}>{education.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
