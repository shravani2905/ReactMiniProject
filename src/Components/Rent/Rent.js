import "./Rent.css";
import Property from "../Property/Property";
function Rent() {
  const propertiesdata = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
      title: "Seaside Vacation Home in Kerala",
      location: "Kerala",
      cost: "Rs. 10000/day",
      squareFeet: "1600 sq.ft.",
      type: "Rent",
      Rating: 4.0,
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/db/ee/b1/karikkathi-beach-house.jpg?w=700&h=-1&s=1",
    },
    {
      id: 4,
      title: "Luxurious Apartment in Bangalore City Center",
      location: "Bangalore",
      cost: "Rs. 80,000/month",
      squareFeet: "1200 sq.ft.",
      type: "Rent",
      Rating: 4.5,
      image:
        "https://i.pinimg.com/originals/52/24/85/5224854d4cc4a86611a9172e951ccc0f.jpg",
    },
    {
      id: 5,
      title: "Contemporary Office Space in Cyber City",
      location: "Gurugram",
      cost: "Rs. 1.5 Lakhs/month",
      squareFeet: "8000 sq.ft.",
      type: "Rent",
      Rating: 4.2,
      image:
        "https://imageproxy-v2.services.lokalebasen.dk/h1080/lb-images-asia/in/1406032/8427518-level-14-building-no-8-tower-c-dlf-cyber-city.jpg?v=m1664363520",
    },
    {
      id: 6,
      title: "Charming Cottage in Ooty Hills",
      location: "Ooty",
      cost: "Rs. 5000/day",
      squareFeet: "800 sq.ft.",
      type: "Rent",
      Rating: 4.7,
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/aa/5a/15/charming.jpg?w=1200&h=-1&s=1&cx=1228&cy=1005&chk=v1_2e06eaa50d334c0720fa",
    },
  ];
  return (
    <div className="propertiesdata">
      <h3 className="rent">FOR RENT</h3>
      <div className="row1">
        {propertiesdata.map((property) => (
          <Property key={property.id} data={property} />
        ))}
      </div>
    </div>
  );
}

export default Rent;
