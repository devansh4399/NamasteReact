import { useEffect,useState } from "react";
import { MENU_LINK } from "./contant";

const useRestaunrantMenu =(resId)=>
{

    const [resInfo,setresInfo]=useState();

    useEffect(()=>{
        fetchData();
    },[]
    );

    const fetchData=async()=>{
     const data=await fetch(MENU_LINK+resId);
     const json=data.json();
      };
    
        return resInfo;

};

export default useRestaunrantMenu;