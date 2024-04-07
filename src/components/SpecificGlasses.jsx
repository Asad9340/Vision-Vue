
function SpecificGlasses({ item }) {
  const { image, title, description, price } = item;
  return (
    <div>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price{price}</p>
    </div>
  )
}

export default SpecificGlasses