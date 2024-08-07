import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";


export default function FormCreateComponent() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  // validation error
  useEffect(() => {
    if (title.length < 3) {
      // Handle error
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
      <Button type="submit">Submit</Button>
    </form>
  );
}
