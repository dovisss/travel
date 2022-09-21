<template>
  <div id="app">
<!--    <keep-alive exclude="Detail">-->
<!--      <router-view/>-->
<!--    </keep-alive>-->
    <router-view  v-slot="{ Component }">
<!--      <keep-alive exclude="Detail">-->
        <component :is="Component"></component>
<!--      </keep-alive>-->
    </router-view>
  </div>
</template>

