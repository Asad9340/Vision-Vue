import { useParams, useLoaderData } from 'react-router-dom';
// import SpecificGlasses from './SpecificGlasses';

function GlassesDetails() {
  const { id } = useParams();
  const data = useLoaderData()
  console.log(id,data)
  const specificGlasses = data.find((item) =>item.id===Number(id));
  const { image, name, description, price } = specificGlasses;
  return (
    <div className='flex justify-center flex-col items-center  lg:mx-32 rounded-lg py-6'>
      <img className='w-96' src={image} alt="" />
      <h2 className='text-3xl font-bold'>{name}</h2>
      <p className='text-lg font-medium text-gray-800'>{description}</p>
      <p className='text-lg font-semibold text-gray-900'>Price: {price}</p>
    </div>
  )
}

export default GlassesDetails