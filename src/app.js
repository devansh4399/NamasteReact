import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/HeaderComp";
import Body from "./components/Body";
/* <div id="parent">
      <div id="child">
         <h1>I am H1</h1>
         <h2> I am H2</h2>

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

const resList=[
   {
"info": {
"id": "27118",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/e8643e8c-2ea3-47c0-8e42-ef0a8b0a1e4b_27118.jpg",
"locality": "Meenakshi Temple Road",
"areaName": "Hulimavu",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.3,
"parentId": "166",
"avgRatingString": "4.3",
"totalRatingsString": "48K+",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-12 03:00:00",
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
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/burger-king-meenakshi-temple-road-hulimavu-rest27118",
"type": "WEBLINK"
}
},
{
"info": {
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
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/subway-royal-meenakshi-mall-hulimavu-rest565567",
"type": "WEBLINK"
}
},
{
"info": {
"id": "569591",
"name": "Blue Tokai Coffee Roasters",
"cloudinaryImageId": "1a0521375f07155eda2f1ed263206831",
"locality": "4TH PHASE",
"areaName": "J P Nagar",
"costForTwo": "₹600 for two",
"cuisines": [
"Cafe",
"Coffee",
"Beverages"
],
"avgRating": 4.6,
"parentId": "2682",
"avgRatingString": "4.6",
"totalRatingsString": "1.1K+",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 3.7,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-11 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/blue-tokai-coffee-roasters-4th-phase-j-p-nagar-rest569591",
"type": "WEBLINK"
}
},
{
"info": {
"id": "1532",
"name": "A2B - Adyar Ananda Bhavan",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/c1dda0b3-200c-4d4f-8a34-f5edc4c9991b_1532.jpg",
"locality": "Bilekahalli",
"areaName": "Bannerghatta Main Road",
"costForTwo": "₹300 for two",
"cuisines": [
"South Indian",
"North Indian",
"Sweets",
"Chinese"
],
"avgRating": 4.5,
"veg": true,
"parentId": "22",
"avgRatingString": "4.5",
"totalRatingsString": "129K+",
"sla": {
"deliveryTime": 35,
"lastMileTravel": 1.8,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "1.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-12 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-South%20Indian.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-South%20Indian.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹349",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-bilekahalli-bannerghatta-main-road-rest1532",
"type": "WEBLINK"
}
},
{
"info": {
"id": "357670",
"name": "Starbucks Coffee",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/4/3dcea91f-c9fd-4cdc-ae9f-47d05c653ce4_357670.JPG",
"locality": "Bannergatta Main Road",
"areaName": "Arekere",
"costForTwo": "₹400 for two",
"cuisines": [
"Beverages",
"Cafe",
"Snacks",
"Desserts",
"Bakery",
"Ice Cream"
],
"avgRating": 4.2,
"parentId": "195515",
"avgRatingString": "4.2",
"totalRatingsString": "2.6K+",
"sla": {
"deliveryTime": 22,
"lastMileTravel": 1.9,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-11 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
"description": "Delivery!"
},
{
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹80"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/starbucks-coffee-bannergatta-main-road-arekere-rest357670",
"type": "WEBLINK"
}
},
{
"info": {
"id": "744074",
"name": "Boba Bhai - Bubble Tea & Korean Street Food",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/80d51a00-3433-4045-aeb2-f23929ed6185_744074.jpg",
"locality": "5th Phase",
"areaName": "JP Nagar",
"costForTwo": "₹200 for two",
"cuisines": [
"Bubble Tea",
"Burger",
"Korean",
"Beverages",
"Fast Food",
"Juice and shake"
],
"avgRating": 4.3,
"parentId": "361235",
"avgRatingString": "4.3",
"totalRatingsString": "1.3K+",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 3.7,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-18 00:00:00",
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
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/boba-bhai-bubble-tea-and-korean-street-food-5th-phase-jp-nagar-rest744074",
"type": "WEBLINK"
}
},
{
"info": {
"id": "290339",
"name": "Lo! - Low Carb and Keto Foods",
"cloudinaryImageId": "zsghsvult7zxy9nquss9",
"locality": "7th phase",
"areaName": "Arekere",
"costForTwo": "₹150 for two",
"cuisines": [
"Healthy Food",
"Keto",
"North Indian",
"Continental"
],
"avgRating": 4.4,
"parentId": "8282",
"avgRatingString": "4.4",
"totalRatingsString": "5.3K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 3.8,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-12 00:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "brand",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "brand"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/lo-low-carb-and-keto-foods-7th-phase-arekere-rest290339",
"type": "WEBLINK"
}
},
{
"info": {
"id": "371707",
"name": "ITC Sunfeast Baked Creations",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/3e903c3f-d602-40f6-ab0a-9f03b07a82d3_371707.JPG",
"locality": "SJR TOWERS",
"areaName": "JP Nagar",
"costForTwo": "₹600 for two",
"cuisines": [
"Bakery",
"Desserts",
"Sweets"
],
"avgRating": 4.5,
"parentId": "12285",
"avgRatingString": "4.5",
"totalRatingsString": "3.2K+",
"sla": {
"deliveryTime": 35,
"lastMileTravel": 3.9,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "3.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-12 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "2.5",
"ratingCount": "<3"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/itc-sunfeast-baked-creations-sjr-towers-jp-nagar-rest371707",
"type": "WEBLINK"
}
},
{
"info": {
"id": "792462",
"name": "Suchali's Artisan Bakehouse",
"cloudinaryImageId": "f9f262d0c80a41de4c1a890eb36d1085",
"locality": "Jayanagar",
"areaName": "JP Nagar",
"costForTwo": "₹600 for two",
"cuisines": [
"Bakery",
"Desserts",
"Beverages"
],
"avgRating": 4.5,
"parentId": "196351",
"avgRatingString": "4.5",
"totalRatingsString": "373",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 3.8,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-11 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "15% OFF",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/suchalis-artisan-bakehouse-jayanagar-jp-nagar-rest792462",
"type": "WEBLINK"
}
},
{
"info": {
"id": "95311",
"name": "SMOOR",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/6/ebc04a89-9ebf-44af-8e80-ff018e12cf3d_95311.JPG",
"locality": "Vega City Mall",
"areaName": "Btm Layout",
"costForTwo": "₹350 for two",
"cuisines": [
"Desserts",
"Bakery",
"Beverages"
],
"avgRating": 4.6,
"parentId": "3506",
"avgRatingString": "4.6",
"totalRatingsString": "4.3K+",
"sla": {
"deliveryTime": 38,
"lastMileTravel": 3.5,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "3.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-12 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹150 OFF",
"subHeader": "ABOVE ₹649",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/smoor-vega-city-mall-btm-layout-rest95311",
"type": "WEBLINK"
}
},
{
"info": {
"id": "381852",
"name": "ITC Fabelle Chocolates",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/621a45e3-9717-4717-bb8e-03a00e05d5c4_381852.jpg",
"locality": "7th Phase",
"areaName": "J P Nagar",
"costForTwo": "₹600 for two",
"cuisines": [
"Bakery",
"Desserts"
],
"avgRating": 4.8,
"veg": true,
"parentId": "471924",
"avgRatingString": "4.8",
"totalRatingsString": "225",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 3.9,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-12 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "60% OFF",
"subHeader": "UPTO ₹120"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/itc-fabelle-chocolates-7th-phase-j-p-nagar-rest381852",
"type": "WEBLINK"
}
},
{
"info": {
"id": "278317",
"name": "Theobroma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/3/aec17d33-a885-4666-8bde-a20deb4ca41f_278317.JPG",
"locality": "Bannerghatta Road",
"areaName": "Hulimavu",
"costForTwo": "₹400 for two",
"cuisines": [
"Desserts",
"Bakery"
],
"avgRating": 4.6,
"parentId": "1040",
"avgRatingString": "4.6",
"totalRatingsString": "5.3K+",
"sla": {
"deliveryTime": 20,
"lastMileTravel": 2.5,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-11 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Desserts.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Desserts.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹290"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.7",
"ratingCount": "212"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/theobroma-bannerghatta-road-hulimavu-rest278317",
"type": "WEBLINK"
}
},
{
"info": {
"id": "85216",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/11f85815-db76-4600-be1c-475e2c7a1311_85216.jpg",
"locality": "Akshayanagar",
"areaName": "Arekere",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Beverages",
"Cafe",
"Desserts"
],
"avgRating": 4.4,
"parentId": "630",
"avgRatingString": "4.4",
"totalRatingsString": "23K+",
"sla": {
"deliveryTime": 21,
"lastMileTravel": 2.5,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-11 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹119"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/mcdonalds-akshayanagar-arekere-rest85216",
"type": "WEBLINK"
}
},
{
"info": {
"id": "574978",
"name": "Veg Darbar by Behrouz Biryani",
"cloudinaryImageId": "2b579171cefc545ce6479e21c0016798",
"locality": "Begur Hobali",
"areaName": "Arekere",
"costForTwo": "₹700 for two",
"cuisines": [
"Biryani",
"North Indian",
"Kebabs",
"Mughlai",
"Lucknowi",
"Hyderabadi",
"Desserts",
"Beverages"
],
"avgRating": 4.2,
"veg": true,
"parentId": "344904",
"avgRatingString": "4.2",
"totalRatingsString": "79",
"sla": {
"deliveryTime": 23,
"lastMileTravel": 0.1,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "0.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-11 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹229"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/veg-darbar-by-behrouz-biryani-begur-hobali-arekere-rest574978",
"type": "WEBLINK"
}
},
{
"info": {
"id": "681421",
"name": "LeanCrust Pizza- ThinCrust Experts",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/71a43c44-6cdc-410c-8666-df3936677873_681421.jpg",
"locality": "Govinda Reddy Layout",
"areaName": "Arekere",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Italian",
"Desserts"
],
"avgRating": 4.6,
"parentId": "11216",
"avgRatingString": "4.6",
"totalRatingsString": "730",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "20-30 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-12 02:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-govinda-reddy-layout-arekere-rest681421",
"type": "WEBLINK"
}
},
{
"info": {
"id": "390988",
"name": "ZAZA Mughal Biryani",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/1c0a7396-252e-4053-bb24-63a19977776e_390988.jpg",
"locality": "Arakere Mico Layout main Road",
"areaName": "Arekere",
"costForTwo": "₹250 for two",
"cuisines": [
"Biryani",
"North Indian",
"Awadhi"
],
"avgRating": 4.5,
"parentId": "22473",
"avgRatingString": "4.5",
"totalRatingsString": "983",
"sla": {
"deliveryTime": 15,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "10-20 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-12 02:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/zaza-mughal-biryani-arakere-mico-layout-main-road-arekere-rest390988",
"type": "WEBLINK"
}
},
{
"info": {
"id": "192274",
"name": "McCafe by McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/abcf07b2-e0d9-4807-9057-3ba11166206b_192274.jpg",
"locality": "Royal Meenakshi Mall",
"areaName": "Hulimavu",
"costForTwo": "₹250 for two",
"cuisines": [
"Beverages",
"Desserts"
],
"avgRating": 4.7,
"veg": true,
"parentId": "8263",
"avgRatingString": "4.7",
"totalRatingsString": "69",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 1.8,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "1.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-11 22:55:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/mccafe-by-mcdonalds-royal-meenakshi-mall-hulimavu-rest192274",
"type": "WEBLINK"
}
},
{
"info": {
"id": "664176",
"name": "Go Zero Ice Creams & Desserts",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/24/ece1e26b-d4e3-4a40-bd4d-f4c05beb490d_664176.JPG",
"locality": "Begur",
"areaName": "DLF Town",
"costForTwo": "₹150 for two",
"cuisines": [
"Ice Cream",
"Desserts",
"Healthy Food"
],
"avgRating": 4.5,
"parentId": "343689",
"avgRatingString": "4.5",
"totalRatingsString": "260",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-12 01:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "brand",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "brand"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹51"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.7",
"ratingCount": "179"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/go-zero-ice-creams-and-desserts-begur-dlf-town-rest664176",
"type": "WEBLINK"
}
},
{
"info": {
"id": "450679",
"name": "Chaayos Chai+Snacks=Relax",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_450679.JPG",
"locality": "Arekere Village",
"areaName": "Bannerghatta Road",
"costForTwo": "₹250 for two",
"cuisines": [
"Bakery",
"Beverages",
"Chaat",
"Desserts",
"Home Food",
"Italian",
"Maharashtrian",
"Snacks",
"Street Food",
"Sweets"
],
"avgRating": 4.5,
"parentId": "281782",
"avgRatingString": "4.5",
"totalRatingsString": "3.0K+",
"sla": {
"deliveryTime": 20,
"lastMileTravel": 1.6,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-11 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹84"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-arekere-village-bannerghatta-road-rest450679",
"type": "WEBLINK"
}
},
{
"info": {
"id": "410154",
"name": "Glen's Bakehouse",
"cloudinaryImageId": "tpugdsyyxqlmw7vzzbbz",
"locality": "Bannerghatta Road",
"areaName": "Bannerghatta Road",
"costForTwo": "₹600 for two",
"cuisines": [
"Desserts",
"Bakery",
"Beverages",
"Continental",
"Italian"
],
"avgRating": 4.5,
"parentId": "3220",
"avgRatingString": "4.5",
"totalRatingsString": "7.3K+",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 1.2,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-12 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.2",
"ratingCount": "2.1K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-6ca46e5c-3826-4198-bee5-e6b6e70c1c4a"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/glens-bakehouse-bannerghatta-road-rest410154",
"type": "WEBLINK"
}
}

 
];

console.log(resObj.data.name);

      
      //restaurantCard is child component and it is getting data from Body Compoent where we are calling restaurant card
         const RestaurantCard = (props) =>{
            const {resData}=props;
            return (
               <div className="res-card">
                  <img alt-tab="res-logo" className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+resData.info.cloudinaryImageId}></img>
                  <h3>{resData.info.name}</h3>
                  <h4>{resData.info.cuisines.join(",")}</h4>
                  <h5>{resData.info.costForTwo}</h5>
                  <h6>{resData.info.sla.deliveryTime} minutes</h6>
               </div>
            )
         };
     
      //not using key in map is not accepatable either key unique value or use index.<<<<<<<<best practise.
      const AppLayout = () =>{
         return (
            <div className="app">
               <HeaderComp></HeaderComp>
               <Body></Body>
            </div>
         )
      }

      const root=ReactDOM.createRoot(document.getElementById("root"));

      root.render(<AppLayout/>);

