import { Fragment } from "react/jsx-runtime";
import { Hero, Packages } from "./components";
import Team from "./components/team";
import Newsletter from "./components/newsletter";

export function meta() {
  return [
    { title: "Design Template React Router v7" },
  ];
}

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Packages />
      <Team />
      <Newsletter />
    </Fragment>
  )
}
