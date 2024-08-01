import React, { useEffect, useState } from 'react'

const Products = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json)
      .then(data => setdata(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [])
  return (
    <div className='bg-blue-700 w-screen h-screen pt-[10vh]'>

    </div>
  )
}

export default Products
