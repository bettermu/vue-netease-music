//歌曲相关数据格式转化

//自定义组装对象
export default class Song {
  constructor({ id, mid, singer, name, album, duration, image, url, aliaName }) {
    this.id = id
    this.singer = singer
    this.name = name
    this.album = album
    this.aliaName = aliaName
    // this.duration = duration
    this.image = image
    // this.url = url
  }
}

//歌手数据列表转换
function singerName(arr) {
  let name = []
  name = arr.map((item) => {
    return item.name
  })

  //数组转换字符串
  return name.join('/')
}

//推荐歌曲格式转换
export function createRecommendSong(music) {
  return new Song({
    id: music.id,
    singer: singerName(music.song.artists),
    name: music.name,
    album: music.song.album.name,
    image: music.song.album.picUrl
  })
}

export function createRecommendListSong(music) {
  return new Song({
    id: music.id,
    singer: singerName(music.ar),
    name: music.name,
    album: music.al.name,
    image: music.al.picUrl
  })
}
