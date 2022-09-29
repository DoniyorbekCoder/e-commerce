<script setup lang="ts">
import links from "./links.json";
const src = [
  "icon-category",
  "icon-book",
  "icon-video",
  "ri-mic-2-fill",
  "icon-question",
  "icon-article",
  "icon-image",
  "icon-person",
  "icon-disciple",
  "icon-comment",
  "icon-folder",
  "icon-building",
  "icon-university",
  "icon-forum",
  "icon-award",
  "icon-organization",
  "icon-work",
  "ri-bookmark-fill",
  "icon-link",
];
</script>

<template>
  <aside class="w-full p-10 md:p-20 lg:p-30 bg-white-secondary min-h-screen">
    <router-link to="/">
      <img
        class="m-auto"
        src="../../assets/images/e-commerce.png..jpeg"
        width="150"
        height="150"
        alt=""
      />
    </router-link>
    <div
      class="text-sm font-medium flex flex-col gap-y-20 md:gap-y-25 lg:gap-y-30 mt-30 pl-20 link"
    >
      <router-link
        v-for="(link, index) in links.links"
        :to="link.path"
        :key="link.path"
        class="flex text-black-secondary items-center"
        active-class="router-link-active"
      >
        <i
          :class="src[index]"
          style="font-size: 20px; line-height: 20px"
          class="text-gray-icon"
        ></i>
        <p class="pl-10 text-sm font-medium">{{ link.content }}</p>
      </router-link>
    </div>
  </aside>
</template>

<style scoped>
i {
  color: #c4c4c4;
}

p {
  color: #4d5674;
}

.router-link-active i {
  color: #ffca07;
}

.router-link-active p {
  color: #010e38;
}
</style>
