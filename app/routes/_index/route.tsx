import { Fragment } from "react/jsx-runtime";
import { Hero } from "./components";

export function meta() {
  return [
    { title: "Design Template React Router v7" },
  ];
}

export default function Home() {
  return (
    <Fragment>
      <Hero />
    </Fragment>
  )
}
