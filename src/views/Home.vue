<template>
  <div class="home">
    <h2>All Member</h2>
  </div>
  <div v-if="Customers.length == 0">
    <p>Doesn't have Member</p>
  </div>
  <table class="total" v-else>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
    </tr>
    <list-customers
      class="listCustomers"
      v-for="Customer in Customers"
      :key="Customer.id"
      :Customer="Customer"
    />
  </table>
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
    this.Customer = data;
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
.total th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #2a9134;
  color: white;
}
h2 {
  text-align: center;
  color: green;
  text-shadow: 1px 1px 0px rgb(0, 0, 0);
  font-size: 50px;
}
p {
  text-align: center;
  padding-top: 10%;
  font-size: 35px;
  font-weight: bold;
  color: #2a9134;
}
.listCustomers {
  cursor: pointer;
}
.listCustomers:hover {
  background-color: #e8e8e4;
}
</style>

