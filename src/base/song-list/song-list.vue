<template>
  <div class="song-list">
    <ul>
      <li class="item" v-for="(song,index) in songs" :key="song.id">
        <p class="count">{{index+1}}</p>
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array
    }
  },
  computed: {
  },
  methods: {
    getDesc(song) {
      if (song.aliaName) {
        return `${song.singer}-${song.aliaName}`
      } else {
        return `${song.singer}`
      }
    }
  }
};
</script>

<style lang="scss">
@import "~common/scss/variable";
@import "~common/scss/mixin";
.song-list {
  .item {
    position:relative;
    display:flex;
    align-items:center;
    box-sizing:border-box;
    height:1.875rem;
    border-bottom:.03125rem solid rgb(228,228,228);
    .count {
      flex:0 0 1.5625rem;
      width:1.5625rem;
      text-align:center;
      color: $color-text-g;
    }
    .content {
      flex:1;
      line-height:.625rem;
      overflow:hidden;
      .name {
        margin-top:.125rem;
        width:80%;
        @include no-wrap();
        color: $color-text;
      }
      .desc {
        @include no-wrap();
        // margin-top: 3px;
        width: 80%;
        font-size: .375rem;
        color: $color-text-g;
      }
    }
  }
}
</style>

