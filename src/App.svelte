<script lang="ts">
  import parse from "rss-to-json";
    import { getSubbredit } from "./state";

  const subReddit = getSubbredit()
  let i = 0

  let feed = [];

  $: image = feed[i]?.image || ""
  async function fetchPictures(channel) {
    feed = []
    i = 0
    let rss = await parse(`https://web-production-32e6.up.railway.app/https://www.reddit.com/r/${channel}/.rss`)
    console.log(rss)
    rss.items.forEach(item => {
      if (item.media.thumbnail) feed.push({image: item.media.thumbnail.url})
    })
    feed = feed
    console.log(feed)
  }
  $: fetchPictures($subReddit)

  const changeIndex = (change: number) => {
    i += change
    if (i < 0) i += feed.length
    else if (i >= feed.length) i -= feed.length
  } 

</script>

<div class="container w-full justify-center items-center">
  <img class="w-full h-full" src={image} alt="">
</div>

<div class="flex justify-center h-12">
  <button class="w-4 h-4 align-middle text-center" on:click={() => changeIndex(-1)}> {"<"} </button>
  <p>
    {i + 1 + "/" + feed.length}
  </p>
  <button class="w-4 h-4 align-middle text-center" on:click={() => changeIndex(1)}> {">"} </button>
</div>

<style>
  .container {
    height: calc(100% - 4rem);
  }
</style>
