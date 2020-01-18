<script>
export default {
  data() {
    return {
      edges: []
    };
  },

  created() {
    this.edges = this.$static.allPortfolioPost.edges;
  },

  render() {
    return this.$scopedSlots.default({
      edges: this.edges
    });
  }
};
</script>

<static-query>
query Portfolio {
  allPortfolioPost(sort: [{ by: "year", order: DESC }, { by: "title", order: ASC }]) {
    edges {
      node {
        path
        title
        image (width: 320)
        intro
        year
        technology
      }
    }
  }
}
</static-query>
