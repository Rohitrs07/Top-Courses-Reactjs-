import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import {apiUrl,filterData} from "./data";
import { toast } from "react-toastify";
import {useState , useEffect } from "react";
import Spinner from "./Components/Spinner";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData(){

    //loader on kr denge jab tak data fetch nhi ho jaye tab tak
    setLoading(true);

    try{
      
      const response = await fetch(apiUrl);
      const output = await response.json();
      // here output contains all the data fetched from the api
      setCourses(output.data);

    }
    catch(error){
      toast.error('Something went wrong');
    }

    //data fetch ho chuka hai to loader band kr denge
    setLoading(false);
  }

  useEffect( ()=>{
    fetchData();
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2 ">
        <div>
          <Filter 
              filterData = {filterData}
                category = {category}
                setCategory = {setCategory}
              />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
           loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>) 
          }
        </div> 

      </div>
      
    </div>
  );
};

export default App;
