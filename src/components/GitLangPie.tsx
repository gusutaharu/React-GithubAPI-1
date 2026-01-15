import axios from "axios";
import { useEffect, useState } from "react";
import { PieChart2 } from "./PieChart2";

export const GitLangPie = () => {
  const [langData, setLangData] = useState<Record<string, number>>({});
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      })
      .then((res) => {
        console.log(res.data.length);
        res.data.map((repo: { languages_url: string }) =>
          axios
            .get(repo.languages_url, {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
              },
            })
            .then((res) => {
              for (const [lang, lines] of Object.entries(res.data) as [
                string,
                number
              ][]) {
                setLangData((prev) => ({
                  ...prev,
                  [lang]: (prev[lang] || 0) + lines,
                }));
                setTotal((total) => total + lines);
              }
            })
        );
      });
  }, []);
  return (
    <div className="text-white flex flex-wrap">
      {Object.entries(langData).map((lang) => 
        (lang[1] / total) * 100 > 1 ? (
          <PieChart2 lang={lang} total={total} key={lang[1]} />
        ) : null
      )}
    </div>
  );
};
