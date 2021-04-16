<template>
  <tr @click="emitTableRow(customer)">
    <td>{{ customer.name }}</td>
    <td>{{ customer.email }}</td>
    <td>{{ customer.date }}</td>
  </tr>
</template>

<script>
export default {
  name: "listCustomers",
  props: ["Customer"],
  methods: {
    emitTableRow(Customer) {
      this.$router.push({ name: "Modal", params: { id: Customer.id } });
    },
  },
};
</script>

<style>
td {
  border: 0.5px solid #ddd;
  padding: 15px;
  text-align: left;
  text-decoration: none;
}
</style>