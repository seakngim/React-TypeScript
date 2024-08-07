
import { Card } from 'flowbite-react';

type CardComponentProps = {
  title: string,
  image: string,
  price: number,
  description?: string,
}

export default function CardComponent(props: CardComponentProps) {
  return (
    <Card
      className="max-w-lg px-2"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={props.image}
    >
      <a href="#">
        <h5 className="text-base line-clamp-2 font-semibold tracking-tight text-gray-900 dark:text-white">
          {props.title}
          </h5>
      </a>
      <div className="flex items-center flex-col gap-4">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {props.price}</span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
}
