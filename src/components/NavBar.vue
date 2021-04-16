<template>
    <header id="header">
  <ul class="nav-ul">
      <li class="nav-li">
    <router-link to="/">Hotel Booking</router-link>
      </li>
      <li class="nav-li">
    <router-link to="/">Home</router-link>
      </li>
    <li class="nav-li">
    <router-link to="/about">About</router-link>
    </li>
  </ul>
   </header>
</template>

<script>

</script>
<style scoped>
#header {
    font-family: 'Kanit', sans-serif;
     @apply  flex items-center bg-gray-800  flex-wrap;
}
#header a {
  color: #ffffff;
  @apply  no-underline font-bold ;
}
.nav-ul{
  @apply flex flex-row mt-10 mb-10
}
.nav-li{
  @apply mx-8  px-3 py-2 rounded text-gray-200 
}
.nav-li:hover{
  @apply bg-gray-900 ;
}
</style>