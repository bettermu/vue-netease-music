<template>
  <div class="song-list">
    <ul>
      <li v-for="(song,index) in songs" :key="song.id">
        <p class="count">{{index+1}}</p>
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{song.singer}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs:{
      type: Array
    }
  }

}
</script>

<style lang="scss" scoped>

</style>

