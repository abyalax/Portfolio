import { useParams } from "react-router-dom";
import { portfolio } from "../assets/portfolio";
import Portfolios from "./Portfolios";

const Portfolio = () => {
  const { id } = useParams();
  if (id) {
    const project = portfolio.find((project) => project.id === parseInt(id!));
    return (
      <div>
        <h1>{project?.title}</h1>
        <img src={project?.img} className="w-96 h-96"/>
        <p>{project?.description}</p>
        <p>{project?.techStack}</p>
        <p>{project?.urlGithub}</p>
        <p>{project?.urlWeb}</p>
      </div>
    )
  } else {
    return <Portfolios />
  }

};

export default Portfolio;