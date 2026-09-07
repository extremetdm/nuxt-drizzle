<script setup lang='ts'>
const users = ref<User[]>();

onMounted(async () => {
  const { users: u } = await $fetch("/api");
  users.value = u;
})

</script>

<template>
  <div v-for="user in users" class="flex w-[100vw] justify-center items-center">
    <b>{{ user.id }}</b>
    <p>{{ user.name }}</p>
  </div>
</template>