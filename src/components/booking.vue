<template>
  <h2>Let's get started to make daily !</h2>
  <form @submit.prevent="addMember">
    <label>name : </label>
    <input type="text" v-model="name" required /> <br />
    <ui>Number of people : </ui>
    <input type="number" v-model="Numberofpeople " required /> <br />
    <label>Date : </label>
    <input type="date" v-model="Date" required /><br />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: "Daily",
  data() {
    return {
      Title: "",
      Content: "",
      Date: "",
      url: "http://localhost:3000/members",
    };
  },
  methods: {
    async addDaily() {
      if (this.Title && this.Content && this.Date) {
        let newCustomer = {
          name: this.name,
          Numberofpeople : this.Numberofpeople ,
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
  background-color: #e0e00d;
  color: white;
  cursor: pointer;
}
h2 {
  color: rgb(51, 28, 20);
  text-shadow: 1px 1px 0px rgb(0, 0, 0);
  font-size: 50px;
}
</style>