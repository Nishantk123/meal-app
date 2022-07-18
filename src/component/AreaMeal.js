import React, { useEffect, useState } from "react";
import axios from 'axios';
const AreaMeal = () =>{
    const [area, setArea] = useState([])
    const [selectedArea, setSelectedArea] = useState("")
    const [meal_list, setMealList] = useState([])

    useEffect (()=>{
        getArea()
    },[])

    useEffect(()=>{
        if(selectedArea){
            getFoodByArea()
        }
    },[selectedArea])

    const getArea = () =>{
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then(res =>{
                if (res.data){
                    setArea(res.data.meals)
                }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const handleArea = (e) =>{
        console.log(e.target.value);
        setSelectedArea(e.target.value)
    }

    const getFoodByArea = () =>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a="+ selectedArea)
        .then(res =>{
            console.log(res.data)
            if(res.data){
                setMealList(res.data.meals)
            }
        })
        .catch(err =>{
            console.log(err)

        })
    }
    console.log(meal_list);
    return(
        <div className="container">
            
            <select className="form-control my-3" onChange={(e)=> handleArea(e)}>
                <option>select</option>
                {
                    area.map((data, index)=>{
                        return(
                            <option value={data.strArea}>{data.strArea}</option>
                        )
                    })
                }             
            </select>
            <div className="">
                    <div className="row">
                        {
                           meal_list.map((data, index)=>{
                            return(
                                <div className="col-sm-3 my-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="w-100" src={data.strMealThumb} />
                                            <div className="category my-3">{data.strMeal}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                           }) 
                        }
                    </div>
                </div>
        </div>
    )
}

export default AreaMeal;