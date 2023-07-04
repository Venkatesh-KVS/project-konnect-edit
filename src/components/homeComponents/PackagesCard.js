const packageData = [
  {
    name: "HbA1c (Glycated Haemoglobin)",
    price: "Rs 450",
    invCode: "Includes",
    description: "Excepteur sint occaecat cupidatat non proident",
  },
  {
    name: "HbA1c (Glycated Haemoglobin)",
    price: "Rs 450",
    invCode: "Includes",
    description: "Excepteur sint occaecat cupidatat non proident",
  },
];

const PackagesCard = (props) => {
  return (
    <div>
      <div className="test-cards d-flex">
        <div className="test-card">
          <h3>{props.name}</h3>
          <span>{props.price}</span>
          <hr />
          <p>{props.InvCode}</p>
          <p>{props.description}</p>
          <hr />
          <div className="test-btns d-flex">
            <button type="button" className="test-btn">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;
export { packageData };
