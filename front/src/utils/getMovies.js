import axios from "axios";
import cheerio from "cheerio";
import jsonp from "jsonp";

export const getHtml = async () => {
  try {
    const today = new Date().toJSON().slice(0, 10).replace(/-/g, "");
    jsonp(
      `https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=${today}&page=1`,
      null,
      (err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log(data);
        }
      }
    );
    // return await axios.get(
    //   `https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=${today}&page=1`
    // );
  } catch (error) {
    console.error(error);
  }
};
