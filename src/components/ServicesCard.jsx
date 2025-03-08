const ServicesCard = ({ image, title, author,description }) => {
    
    return (
      <div className="card hover:bg-gray-100 transition duration-300 ease-in-out shadow-lg rounded-lg p-4">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
        <div className="card-body mt-3">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-gray-600">
          {description}
          </p>
          <h5 className="text-sm text-gray-800 font-semibold mt-2">{author}</h5>
        </div>
      </div>
    );
  };
  
  export default ServicesCard;
  