import { Link } from "react-router-dom";

function Cards({ item }) {
  const { image, name, price, description } = item;
  return (
    <Link to='/description'>
      <div className="border rounded-lg ">
        <img
          className="w-full bg-gray-100 rounded-lg mb-6"
          src={image}
          alt=""
        />
        <h2 className="text-xl font-bold bg-gray-900 text-white p-2 rounded-md text-center">
          {name}
        </h2>
        <div className="mx-4 space-y-3 my-4">
          <p className="text-base font-semibold">Price: {price}</p>
          <p className="text-sm font-medium text-[rgb(57,53,53)]">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
