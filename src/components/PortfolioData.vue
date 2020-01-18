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
  allPortfolioPost(sortBy: "year", order: DESC) {
    edges {
      node {
        path
        title
        image (width: 300)
        intro
        year
        technology
      }
    }
  }
}
</static-query>
