<template>
  <form @submit.prevent="addBooking">
    <label>name : </label>
    <input type="text" v-model="name" required /> <br />
    <labal>Number of people : </labal>
    <input type="number" v-model="Numberofpeople " required /> <br />
    <label>Telno. : </label>
    <input type="text" v-model="Telno " required /> <br />
    <label>Date : </label>
    <input type="date" v-model="Date" required /><br />
    <button value="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Booking",
  data() {
    return {
      name: "",
      Numberofpeople: 1,
      Telno:"",
      Date: "" ,
      url: "http://localhost:3000/Customers",
    };
  },
  methods: {
    async addBooking() {
      if (this.name && this.Numberofpeople &&this.Telno && this.Date) {
        let newCustomer = {
          name: this.name,
          Numberofpeople : this.Numberofpeople ,
          Telno:this.Telno,
          Date: this.Date,
        };
        await fetch(this.url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCustomer),
        });
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
form {
  text-align: center;
  margin: 0 auto 0 auto;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 50px;
}
input {
  padding: 50px;
  border: 0;
  border-bottom: 1px solid #ddd;
  background-color: #f8f9fa;
}
form button {
  padding: 10px;
  margin-top: 20px;
  border: none;
  background-color: #c9c943;
  color: white;
  cursor: pointer;
}
h2 {
  color: rgb(51, 28, 20);
  text-shadow: 1px 1px 0px rgb(0, 0, 0);
  font-size: 50px;
}
</style>