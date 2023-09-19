import "./styles.css";

export const Card = ({ title, subtitle, link }) => {
  return (
    <>
      <div className="card">
        <a href={link}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </a>
      </div>
    </>
  );
};
