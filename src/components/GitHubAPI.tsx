import axios from "axios";
import { useEffect, useState } from "react";

export const GitHubAPI = () => {
  const [lunguagesdata, setLunguagesData] = useState("");
  useEffect(() => {
    axios
      // .get("https://api.github.com/users/gusutaharu/repos?per_page=100&page=1")
      .get("https://api.github.com/repos/gusutaharu/React-GithubAPI-1/languages")
      .then((res) => {
        console.log(res.data);
        setLunguagesData(res.data);
      });
  }, []);
  return (
    <>
      {Object.entries(lunguagesdata).map((data)=>(
        <p>{data}</p>
      ))};
    </>
  );
};
