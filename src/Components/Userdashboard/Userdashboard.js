import "./Userdashboard.css";
import Property from "../Property/Property";
import { useLocation } from "react-router-dom";
function Userdashboard() {
  let { state } = useLocation();
  const propertiesdata = [
    {
      id: 1,
      title: "Luxurious Apartment with Sea View",
      location: "Mumbai",
      cost: "Rs. 2.5 Crores",
      squareFeet: "1800 sq.ft.",
      type: "Buy",
      Rating: 4.6,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/272767597.jpg?k=87b43f4a2e0aac4243b85efdd7fc09900670da8181d2b9d9b2fbd187039af8e5&o=&hp=1",
    },
    {
      id: 2,
      title: "Spacious Villa in Green Valley",
      location: "Bangalore",
      cost: "Rs. 2 lakhs/month",
      squareFeet: "2500 sq.ft.",
      type: "Buy",
      Rating: 4.1,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/166987636.jpg?k=6bcd5e1c1fb7cf2c86a1f6dfd7853ac6e4136d0afd4c724e5bde2b0299d2a415&o=&hp=1",
    },
    {
      id: 3,
      title: "Elegant 2 BHK Flat",
      location: "Delhi",
      cost: "₹1.2 Crores",
      squareFeet: "1200 sq.ft.",
      type: "Buy",
      Rating: 4.2,
      image:
        "https://i.pinimg.com/originals/52/eb/e2/52ebe201949a3f98084cdb851daa0eb2.jpg",
    },
    {
      id: 4,
      title: "Beautiful Farmhouse with Scenic Views",
      location: "Goa",
      cost: "₹4.2 Crores",
      squareFeet: "3000 sq.ft.",
      type: "Buy",
      Rating: 3.9,
      image:
        "https://cdn.onekindesign.com/wp-content/uploads/2020/02/Smoky-Mountain-Farmhouse-Jonathan-Miller-Architecture-21-1-Kindesign.jpg",
    },
    {
      id: 5,
      title: "Cozy 3BHK  Apartment",
      location: "Pune",
      cost: "Rs. 60 Lakhs",
      squareFeet: "800 sq.ft.",
      type: "Buy",
      Rating: 4.9,
      image:
        "https://www.homelane.com/blog/wp-content/uploads/2022/11/3bhk-interior-design.jpg",
    },
    {
      id: 6,
      title: "Luxury 3 BHK Penthouse",
      location: "Kolkata",
      cost: "Rs.20000/month",
      squareFeet: "2200 sq.ft.",
      type: "Buy",
      Rating: 4.5,
      image:
        "https://cdn10.phillymag.com/wp-content/uploads/sites/3/2021/08/the-curtis-penthouse-profile-view-from-terrace-keystone-property-group.jpeg",
    },
    {
      id: 7,
      title: "Modern Office Space in Tech Park",
      location: "Hyderabad",
      cost: "Rs. 1 Lakh/month",
      squareFeet: "10000 sq.ft.",
      type: "Rent",
      Rating: 4.8,
      image:
        "https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Modern-Office-Interior-with-Open-Floor-Plan-scaled.jpeg",
    },
    {
      id: 8,
      title: "Premium Commercial Space",
      location: "Mumbai",
      cost: "Rs. 1 crore/year",
      squareFeet: "15000 sq.ft.",
      type: "Rent",
      Rating: 4.23,
      image:
        "https://www.floortap.com/resources/wp-content/uploads/2023/11/office-space-in-mumbai.jpg",
    },
    {
      id: 9,
      title: "Seaside Vacation Home in Kerala",
      location: "Kerala",
      cost: "Rs. 10000/day",
      squareFeet: "1600 sq.ft.",
      type: "Rent",
      Rating: 4.0,
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/db/ee/b1/karikkathi-beach-house.jpg?w=700&h=-1&s=1",
    },
  ];
  return (
    <div className="propertiesdata">
      <h2 className="user">Welcome, {state.username}</h2>
      <div className="row1">
        {propertiesdata.map((property) => (
          <Property key={property.id} data={property} />
        ))}
      </div>
    </div>
  );
}

export default Userdashboard;
