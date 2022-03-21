<template>
  <div v-if="job">
    <h1>The job id is {{ id }}</h1>
    <h1>{{ job.details }}</h1>
    <h1>The name job is {{ job.title }}</h1>
  </div>
  <div v-else>
    <P>Loading job details...</P>
  </div>
</template>

<script>
export default {
  props: ["id", "name"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
