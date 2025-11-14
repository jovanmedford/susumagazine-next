import Activity, { ActivityData } from "./components/activity";
import MajorSection from "./components/major-section";

export default function AroundTheMovement() {
  return (
    <MajorSection heading="Around The Movement">
      <ul className="grid md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <li key={activity.to}><Activity activity={activity} /></li>
        ))}
      </ul>
    </MajorSection>
  );
}

const activities: ActivityData[] = [
  {
    to: "/magazine-libary",
    title: "Magazine library",
    description: "All issues of SUSU magazine in one place",
    imgSrc: "/img",
    imgAlt: "img",
  },
  {
    to: "/who-is-who",
    title: "Who is Who?",
    description: "See the  current heads of the credit unions in Barbados",
    imgSrc: "/img",
    imgAlt: "img",
  },
  {
    to: "/directory",
    title: "Credit Union Directory",
    description: "See the  current heads of the credit unions in Barbados",
    imgSrc: "/img",
    imgAlt: "img",
  },
];
