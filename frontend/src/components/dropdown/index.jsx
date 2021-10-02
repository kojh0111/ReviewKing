import React from "react";
import MenuCategory from "../../const/menuCategory";
import RestaurantName from "../../const/restaurantName";
import { Marginer } from "../marginer";
import "./index.scss";


export function DropDown(props) {

    
    return(

        <div className="AllContainer">

            <div className="DropDownContainer">
                <div className="DropDownBtn" >분류를 선택하세요</div>
                    
                <div className="DropDownContent">


                    {MenuCategory.map(option => (
                        <div className="DropDownItem" >{option}</div>
                    ))}
                        
                </div>
                    
            </div>

            <Marginer direction="horizontal" margin="3em"/>

            <div className="DropDownContainer">
                <div className="DropDownBtn" >음식점을 선택하세요</div>
                    
                <div className="DropDownContent">

                    {RestaurantName.map(option => (
                        <div className="DropDownItem">{option}</div>
                    ))}
                        
                </div>
                    
            </div>

        </div>
    ); 

}
