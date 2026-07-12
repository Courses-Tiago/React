const DestructuringCarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>Car Description</h2>
      <ul>
        <li>Brand: {brand}</li>
        <li>Km: {km}</li>
        <li>Color: {color}</li>
      </ul>
    </div>
  );
};

export default DestructuringCarDetails;