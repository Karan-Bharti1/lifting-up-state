const Item = ({ photoUrl, description, dishName }) => {
  return (
    <div>
    <div className="flex justify-between my-3">
      <div>
        <p className="text-lg">{dishName}</p>
        <p className="text-lg">{description}</p>
        <button className="px-4  my-2 rounded-lg cursor-pointer font-bold border-2">+ Cart</button>
      </div>
      <div>
        <img className="w-28 h-28" src={photoUrl} />
      </div>
     </div>
     
    </div>
  );
};
export default Item;
