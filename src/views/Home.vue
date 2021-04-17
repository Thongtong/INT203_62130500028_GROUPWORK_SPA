<template>
  
    
  <div v-if="Customers.length == 0">
    <p>Doesn't have Member</p>
  </div> 
    <list-customers v-else
      class="listCustomers"
      v-for="Customer in Customers"
      :key="Customer.id"
      :customer="Customer"
    />
</template>

<script>
import ListCustomers from "../components/ListCustomers.vue";
export default {
  name: "Home",
  components: {
    ListCustomers,
  },
  data() {
    return {
      Customers: [],
    };
  },
  methods: {},
  async mounted() {
    const res = await fetch("http://localhost:5000/Customers");
    const data = await res.json();
    console.log(data);
    this.Customers = data;

  },
};
</script>

<style scoped >
.listCustomers {
  cursor: pointer;
}
.listCustomers:hover {
  background-color: #e8e8e4;
}
</style>

