import "./Children.css";

const Children = ({ changeName }) => {
  return (
    <>
      <div className="children">
        <h2>Children</h2>
        <button type="button" onClick={() => changeName("Parent Name changed")}>
          setName Parent
        </button>
      </div>
    </>
  );
};

export default Children;
