import StickyCard from "../stickyCards.tsx/stickyCard";
import "./newSteps.css";

export default function NewSteps() {
  return (
    <div className={`global_styles_for_sticky_cards`}>
      <section className="intro">
        <h1>Nuestro trabajo</h1>
      </section>
      <StickyCard />
    </div>
  );
}
