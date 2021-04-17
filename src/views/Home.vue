<template>
  <div class="home">
  </div>
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
import listCustomers from "../components/listCustomers.vue";
export default {
  name: "Home",
  components: {
    listCustomers,
  },
  data() {
    return {
      Customers: [],
    };
  },
  methods: {},
  async mounted() {
    const res = await fetch("http://localhost:3000/Customers");
    const data = await res.json();
    console.log(data);
    this.Customers = data;

  },
};
</script>

<style scoped >
.home {
  margin-top: 2%;
}
.all-member {
  border-collapse: collapse;
  margin: 0 auto 0 auto;
  box-shadow: 8px 10px 55px -24px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 10px 55px -24px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 10px 55px -24px rgba(0, 0, 0, 0.75);
}
h2 {
  text-align: center;
  color: green;
  text-shadow: 1px 1px 0px rgb(0, 0, 0);
  font-size: 50px;
}

.listCustomers {
  cursor: pointer;
}
.listCustomers:hover {
  background-color: #e8e8e4;
}
</style>

