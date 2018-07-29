import '../assets/styles/footer.styl'
export default {
  data() {
    return {
      author: 'leeper'
    }
  },
  render() {
    return (
      <div id="main-footer">
        <span>Created by {this.author}</span>
      </div>
    )
  }
}