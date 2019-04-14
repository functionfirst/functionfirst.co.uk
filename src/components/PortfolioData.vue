<script>
export default {
  data () {
    return {
      edges: []
    };
  },
  created() {
    this.edges = this.$static.allPortfolioPost.edges;
  },
  render() {
    return this.$scopedSlots.default({
      foo: 'bar',
      edges: this.edges
    })
  }
}
</script>

<static-query>
query Portfolio {
  allPortfolioPost(sortBy: "DESC") {
    edges {
      node {
        path
        title
        image (width: 300)
        intro
      }
    }
  }
}
</static-query>