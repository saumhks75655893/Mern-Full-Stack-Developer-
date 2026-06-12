import React, { useEffect, useState } from 'react'
import TopContainer from './components/TopContainer'
import FoodCartContainer from './components/FoodCartContainer'
import axiosInstance from './components/AxiosFetchData'

const App = () => {

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false)
  console.log(value)
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null)
  const [selectedBtn, setSelectedBtn] = useState("all");


  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axiosInstance.get('/recipes')
      setData(response.data.recipes)
      setFilteredData(response.data.recipes)

      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  function filterData(e) {
    setValue(e.target.value)
    const searchValue = value;
    if (searchValue === "") {
      setFilteredData(null)
    }

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()))

    setFilteredData(filter)

  }

  function filterDataBasedOnBtns(type) {

    console.log(type);

    (type === "all" && setFilteredData(data), setSelectedBtn("all"))


    const filter = data?.filter((food) => food.difficulty.toLowerCase().includes(type.toLowerCase()))
    setFilteredData(filter)
    setSelectedBtn(type);



  }


  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div>
      <TopContainer filterData={filterData} value={value} setData={setData} selectedBtn={selectedBtn} filterDataBasedOnBtns={filterDataBasedOnBtns} />
      <FoodCartContainer loading={loading} data={filteredData} />
    </div>
  )
}

export default App
