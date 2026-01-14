import axios from "axios";
import { useEffect, useState } from "react";

export const GitHubAPI = () => {
  // const [langData, setLangData] = useState<Record<string, number>>({});
  // const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      })
      .then((res) => {
        res.data.map((repo) =>
          axios
            .get(repo.languages_url, {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
              },
            })
            .then((res) => {
              console.log(res.data);
              for (const [lang, lines] of Object.entries(res.data) as [
                string,
                number
              ][]) {
                console.log([lang], [lines]);
              }
            })
        );
      });
  }, []);
  return (
    <div className="text-white">
      {/* {Object.entries(langData).map((lang)=>(
        <p key={lang[0]}>{lang[1]}:</p>
      ))} */}
      {/* {total} */}
    </div>
  );
};
