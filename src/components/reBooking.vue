<template>
  <div class="not-found" v-if="checkCustomer.length == 0">
    <p>Not Found</p>
  </div>
  <div class="modal" v-else @submit.prevent="">
    <h2>Edit or Delete</h2>
    <span class="material-icons" @click="backToHome"> close </span>
    <form>
      <label>Name : </label>
      <input type="text" v-model="name" required /> <br />
      <label>Numberofpeople : </label>
      <input type="number" v-model="Numberofpeople" required /> <br />
      <label>Telno. : </label>
      <input type="text" v-model="Telno " required /><br />
      <label>Date : </label>
      <input type="Date" v-model="date " required /><br />
      <div class="confirm">
        <label>Please check this box to confirm you do</label>
        <input
          type="checkbox"
          value="true"
          v-model="readyToConfirm"
          required
        /><br />
      </div>
      <button class="submit" @click="editBooking">Edit</button>
      <button class="delete" @click="deleteBooking">Delete</button><br />
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
      email: "",
      age: "",
      url: "http://localhost:3000/Customers/" + this.id,
      readyToConfirm: false,
      checkCustomer: [],
    };
  },
  methods: {
    backToHome() {
      this.$router.push("/");
    },
    async editBooking() {
      if (this.readyToConfirm) {
        let editBooking = {
          name: this.name,
          Numberofpeople : this.Numberofpeople ,
          Telno:this.Telno,
          Date: this.Date,
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
      if (this.readyToConfirm) {
        await fetch(this.url, {
          method: "DELETE",
        });
        this.$router.push("/");
      }
    },
  },
  async mounted() {
    const res = await fetch(this.url);
    const data = await res.json();
    this.checkCustomer = data;
    this.name = data.name;
    this.Numberofpeople = data.Numberofpeople;
    this.Telno = data.Telno;
    this.Date= data.Date;
  },
};
</script>

<style scoped>

</style>