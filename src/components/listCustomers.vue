<template>
 <table  >
 <tr>
      <th>Name</th>
      <th>Numberofpeople</th>
      <th>Telno.</th>
      <th>Date</th>
    </tr>
  <tr @click="emitTableRow(customer)">
    <td>{{ customer.name }}</td>
    <td>{{ customer.Numberofpeople }}</td>
    <td>{{ customer.Telno }}</td>
    <td>{{ customer.Date }}</td>
  </tr>
 </table>
</template>

<script>
export default {
  name: "listCustomers",
  props: ["customer"],
  methods: {
    emitTableRow() {
      this.$router.push({ name: "ReBooking", params: { id: customer.id } });
  
    },
  }
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