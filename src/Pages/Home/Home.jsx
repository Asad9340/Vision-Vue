import useGlasses from "../../Hooks/useGlasses"
import Cards from "../../components/Cards";

function Home() {
  const { data } = useGlasses();
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        data.map((item) => {
         return <Cards key={item.id} item={item} />
        })
      }
    </div>
  )
}

export default Home