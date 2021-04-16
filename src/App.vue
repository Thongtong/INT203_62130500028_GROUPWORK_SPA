<template>
  <nav-bar/>
  <router-view />
</template>

<script>
import NavBar from './components/NavBar';
export default {
  components: { NavBar },
  data() {
    return {
      changeMode: false,
    };
  },
  computed: {
    NavBar
  },
  methods: {
    
  },
};
</script>
