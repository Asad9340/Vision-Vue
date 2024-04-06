import { useEffect, useState } from "react"

function useGlasses() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async()=> {
      const res = await fetch('/glasses.json');
      const userData =await res.json();
      setData(userData);
    })()
  },[])
  return {data}
}

export default useGlasses