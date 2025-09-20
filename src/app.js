import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/HeaderComp";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet, RouterProvider,createBrowserRouter } from "react-router-dom";

/* <div id="parent">
      <div id="child">
         <h1>I am H1</h1>
         <h2> I am H2</h2>
s
         </div>
         </div>
         */
      //   const heading = React.createElement
      //   ("div",
      //       {id:"parent"},
      //    React.createElement("div",{id:"child"},
      //      [ React.createElement("h1", { key: "h1" }, "I am H1 Tag"),
      //       React.createElement("h2", { key: "h2" }, "I am H2 tag")] )
      //    );

      //   const root=ReactDOM.createRoot(document.getElementById("root"));

      //   root.render(heading);

      /* Header
            Logo
            Nav Items


      Body 
         Search Bar
         Search Button
         Restaurant Comp   
         --Restaurant Cards



      Footer
       -- Copyright
       -- Links
       --address
       --contacts

      */

      // const Title=()=>(
      //    <h2>Namaste JAVASCRIPT</h2>
      // );

      // const HeadingComponent = () =>(
      //    <div>
      //          <Title/>
      //    <h1 className="heading">Namaste React</h1>
      //       </div>
      // );

      
      const resObj={
     data: {
         "id": "565567",
"name": "Subway",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/156e8168-efcd-4259-9253-d73058f638ed_565567.jpg",
"locality": "Royal Meenakshi Mall",
"areaName": "Hulimavu",
"costForTwo": "₹350 for two",
"cuisines": [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
"avgRating": 4.3,
"parentId": "2",
"avgRatingString": "4.3",
"totalRatingsString": "3.1K+",
"sla": {
"deliveryTime": 37,
"lastMileTravel": 1.8,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "1.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-11 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
}
}
;



console.log(resObj.data.name);

      
      //restaurantCard is child component and it is getting data from Body Compoent where we are calling restaurant card
         
     
      //not using key in map is not accepatable either key unique value or use index.<<<<<<<<best practise.
      const AppLayout = () =>{
         return (
            <div className="app">
               <HeaderComp></HeaderComp>
               <Outlet></Outlet>
               {/* <Body></Body> */}
            </div>
         )
      }

      const root=ReactDOM.createRoot(document.getElementById("root"));

      const appRouter=createBrowserRouter([
         {
         path:"/",
         element:<AppLayout></AppLayout>,
         children:[
            {
               path:"/",
               element:<Body></Body>
            },
            {
         path:"/about",
         element:<About></About>
      },
      {
         path:"/contact",
         element:<Contact></Contact>
      }
      ,{
         path:"/restaurants/:resId",
         element:<RestaurantMenu></RestaurantMenu>
      }
         ],
         errorElement:<Error></Error>
      // },
      // {
      //    path:"/about",
      //    element:<About></About>
      // },
      // {
      //    path:"/contact",
      //    element:<Contact></Contact>
      // }
         }
   ]);

      //root.render(<AppLayout/>);
      root.render(<RouterProvider router={appRouter}/>);

