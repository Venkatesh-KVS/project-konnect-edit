const TestCard = () => {
  return (
    <div>
      <div className="test-cards d-flex">
        <div className="test-card">
          <h3>HbA1c (Glycated Haemoglobin)</h3>
          <span>Rs 450</span>
          <hr />
          <p>Includes</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
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

export default TestCard;
