<template>
  <div class="not-found" v-if="checkCustomer.length == 0">
    <p>Not Found</p>
  </div>
  <div class="modal" v-else @submit.prevent="">
    <form>
      <label>Name : </label>
      <input type="text"
      class="w-7/12 px-3 py-1 border border-gray-500 focus:border-black focus:outline-none rounded-l-md rounded-r-none text-2xl" 
       v-model="name" required /> <br />
      <label>Numberofpeople : </label>
      <input type="number"
      class="w-6/12 px-3 py-1 border border-gray-500 focus:border-black focus:outline-none rounded-l-md rounded-r-none text-2xl"
       v-model="Numberofpeople" required /> <br />
      <label>Telno. : </label>
      <input type="number" 
      class="w-5/12 px-3 py-1 border border-gray-500 focus:border-black focus:outline-none rounded-l-md rounded-r-none text-2xl"
      v-model="Telno " required /><br />
      <label>Date : </label>
      <input type="Date" v-model="date " required /><br />
      <button class="submit" @click="editBooking">Edit</button>
      <button class="delete" @click="deleteBooking">Delete</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ReBooking",
  props: ["id"],
  data() {
    return {
      name: "",
      Numberofpeople: "",
      Telno:"",
      date: "" ,
      url: "http://localhost:5000/Customers/" + this.id,
      checkCustomer: [],
    };
  },
  methods: {
    backToHome() {
      this.$router.push("/");
    },
    async editBooking() {
       {
        let editBooking = {
          name: this.name,
          Numberofpeople : this.Numberofpeople ,
          Telno:this.Telno,
          Date: this.date,
        };
        await fetch(this.url, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editBooking),
        });
        this.$router.push("/");
      }
    },
    async deleteBooking() {
        await fetch(this.url, {
          method: "DELETE",
        });
        this.$router.push("/");
      
    },
  },
  async mounted() {
    const res = await fetch(this.url);
    const data = await res.json();
    this.checkCustomer = data;
    this.name = data.name;
    this.Numberofpeople = data.Numberofpeople;
    this.Telno = data.Telno;
    this.Date= data.date;
  },
};
</script>

<style scoped>
.submit {
  background-color: #000000;
  padding: 10px 15px 10px 15px;
  margin-right: 10px;
  color: white;
}
.delete {
  background-color: #000000;
  padding: 10px 15px 10px 15px;
  margin-right: 10px;
  color: white;
}
</style>