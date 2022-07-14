import React, { useEffect, useState } from "react";
import axios from "axios";
const Landing = () =>{
    const [foodList, setFoodList] = useState([])

    useEffect(()=>{
        getallFoodBycategory()
    },[])

    const getallFoodBycategory = () =>{
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res =>{
            console.log(res.data)
            if (res.data){
                setFoodList(res.data.categories)
            }
        })
    }
    console.log(foodList);
    return(
        <div className="container-fluid bg-light">
            <div>
                <input className="form-control my-3" placeholder="enter" />

                <div className="">
                    <div className="row">
                        {
                           foodList.map((data, index)=>{
                            return(
                                <div className="col-sm-3 my-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="w-100" src={data.strCategoryThumb} />
                                            <div className="category my-3">{data.strCategory}</div>
                                            <div className="description">{data.strCategoryDescription}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                           }) 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;