import axios from "axios";

export default {
  searchArticles: function(query) {
    return axios.get("/api/nyt/search", {params: query});
  },
  getArticles: function() {
    return axios.get("/api/articles");
  },
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/articles/", articleData);
  }
};
