
const audioRef = {

  init(ref) {

    ref.ontimeupdate = audioRef.ontimeupdate

  },

  ontimeupdate() {
    console.log(1)
  }
}

export default audioRef





