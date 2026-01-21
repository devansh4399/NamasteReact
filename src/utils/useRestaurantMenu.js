import { useEffect,useState } from "react";
import { MENU_LINK } from "./contant";
import resList from "./mockData";

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
     setresInfo(json.data);
      };

      const resData=resList.find((rest)=>rest.id===resId)
    
        return resInfo;

};

export default useRestaunrantMenu;