<template>
  <!-- <div id="insert"> -->
    <form @submit.prevent="addBooking">
      <label>name : </label>
      <input type="text"
      placeholder="enter your name"  class="w-7/12 px-3 py-1 border border-gray-500 focus:border-black focus:outline-none rounded-l-md rounded-r-none text-2xl"
       v-model="name" required /> <br />
      <labal>Number of people : </labal>
      <input type="number"
      placeholder="enter your Number of people"  class="w-6/12 px-3 py-1 border border-gray-500 focus:border-black focus:outline-none rounded-l-md rounded-r-none text-2xl"
       v-model="Numberofpeople" required /> <br />
      <label>Telno. : </label>
      <input type="number" 
       placeholder="enter your Telno."  class="w-5/12 px-3 py-1 border border-gray-500 focus:border-black focus:outline-none rounded-l-md rounded-r-none text-2xl"
       v-model="Telno" required /> <br />
      <label>Date : </label>
      <input type="date" v-model="date" required /><br />
      <button class="submit" value="submit">Submit</button>
      
    </form>
  <!-- </div> -->
</template>

<script>
export default {
  name: "Booking",
  data() {
    return {
      name: "",
      Numberofpeople: "",
      Telno: "",
      date: "",
      url: "http://localhost:5000/Customers",
    };
  },
  methods: {
    async addBooking() {
      if (this.name && this.Numberofpeople && this.Telno) {
        let newCustomer = {
          name: this.name,
          Numberofpeople: this.Numberofpeople,
          Telno: this.Telno,
          Date: this.date,
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
.submit {
  background-color: #000000;
  padding: 10px 20px 10px 15px;
  margin-right: 10px;
  color: white;
}
</style>
