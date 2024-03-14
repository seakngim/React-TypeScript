import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

type ErrorType = {
  title: string;
  price: string;
};

export default function FormCreateComponent() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Smart Phone");
  const [image, setImage] = useState(
    "https://www.flowbite-react.com/images/products/apple-watch.png"
  );

  const [error, setError] = useState<ErrorType>({ title: "", price: "" });

  // validation error
  useEffect(() => {
    if (title.length < 3) {
      setError((prev) => {
        return prev;
      });
    }
  }, [title, price]);
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Product Title" />
        </div>
        <TextInput
          id="title"
          type="text"
          placeholder="Apple Vision Pro"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Product Price" />
        </div>
        <TextInput
          id="price"
          type="text"
          placeholder="Apple Vision Pro"
          required
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Product description" />
        </div>
        <TextInput
          id="description"
          type="text"
          placeholder="Apple Vision Pro"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
