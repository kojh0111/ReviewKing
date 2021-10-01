import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

const AllContainer = styled.div`
    display:flex;
    flex-direction: row;
`;

const DropDownContainer = styled.div`
    width:400px;
    margin: 0 auto;
    position: relative;
`;

const DropDownBtn= styled.div`
    padding:10px 15px;
    background: #fff;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    font-weight: bold;
    color: #333;
    display:flex;
    align-items: center;
    justify-content: space-between;
    cusor: pointer;
`;

const DropDownContent= styled.div`
    position: absolute
    width: 90%
    top:100%
    left: 0;
    padding:15px 15px;
    background: #fff;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    font-weight: 500;
    color: #333;
`;

const DropDownItem= styled.div`
    padding: 10px
    cusor: pointer;
    transition: all 0.2s

    &:hover {
        background-color: #f4f4f4;
    }
`;



export function DropDown(props) {

    const options1 =['한식','일식','중식','양식']
    const options2 =['스시산원','마초야','김봉남포장마차 선릉점','코르바니']
    
    return(
        <AllContainer>

            <DropDownContainer>
                <DropDownBtn >분류를 선택하세요</DropDownBtn>
                    
                <DropDownContent>

                    {options1.map(option => (
                        <DropDownItem >{option}</DropDownItem>
                    ))}
                        
                </DropDownContent>
                    
            </DropDownContainer>

            <Marginer direction="horizontal" margin="3em"/>

            <DropDownContainer>
                <DropDownBtn >음식점을 선택하세요</DropDownBtn>
                    
                <DropDownContent>

                    {options2.map(option => (
                        <DropDownItem >{option}</DropDownItem>
                    ))}
                        
                </DropDownContent>
                    
            </DropDownContainer>

        </AllContainer>
    ); 

}
