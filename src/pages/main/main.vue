<template>
  <div>Main</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { request1 } from "@/service";

export default defineComponent({
  setup() {
    request1
      .request({
        url: "/home/multidata",
        method: "GET"
      })
      .then((res) => {
        console.log(res);
      });
    return {};
  }
});
</script>

<style scoped></style>
