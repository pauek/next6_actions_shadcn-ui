import Product from "@/components/Product";
import id3photo from "./ID3.jpg";
import pringles from "./pringles.jpg";

export default function Page() {
  return (
    <main className="p-4">
      <h1>Product List</h1>
      
      <Product
        name="Volkswagen ID3"
        price={45000}
        description="Electric car"
        photo={id3photo}
      />
      <Product
        name="Pringles Potatoes"
        price={3.5}
        description="Can of very pre-processed snacks"
        photo={pringles}
      />
    </main>
  );
}
