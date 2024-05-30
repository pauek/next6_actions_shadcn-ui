import Image from "next/image";

export default function Product({
  name,
  price,
  photo,
  description,
}) {
  return (
    <div className="border rounded shadow-md w-48 h-72 relative inline-flex flex-col mr-2">
      <Image src={photo} alt="Product Image" fit={true} className="object-cover aspect-square" />
      <div className="p-2 relative flex-1">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-xs">{description}</p>
        <div className="absolute bottom-2 right-2 text-blue-300">
          {price}€
        </div>
      </div>
    </div>
  );
}
