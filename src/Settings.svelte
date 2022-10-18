<script lang="ts">
    import { getSubbredit } from "./state";

    const subReddit = getSubbredit()
</script>


<div>
  <label for="subReddit" class="w-full">Enter name of subreddit</label>
  <input bind:value={$subReddit} name="subReddit" type="text">
</div>
