<template>
  <q-page class="q-pa-md">
    <q-toolbar class="bg-secondary text-white">
      <q-toolbar-title
        >Release Certificates Requires your Approvals</q-toolbar-title
      >
    </q-toolbar>

    <div class="q-mt-md q-gutter-md">
      <div class="row">
        <div class="col">
          <q-chip color="primary " class="text-white glossy" square
            >Release Name</q-chip
          >
        </div>
        <div class="col">
          <q-chip
            color="primary"
            class="q-ml-md q-mr-sm text-white glossy"
            square
            >Application</q-chip
          >
        </div>
        <div class="col">
          <q-chip
            color="primary"
            class="q-ml-lg q-mr-lg text-white glossy"
            square
            >Type</q-chip
          >
        </div>
        <div class="col">
          <q-chip
            color="primary"
            class="q-ml-lg q-mr-lg text-white glossy"
            square
            >Summary</q-chip
          >
        </div>
        <div class="col">
          <q-chip
            color="primary"
            class="q-ml-lg q-mr-lg text-white glossy"
            square
            >Contacts</q-chip
          >
        </div>
        <div class="col">
          <q-chip
            color="primary"
            class="q-ml-lg q-mr-xl text-white glossy"
            square
            >Date</q-chip
          >
        </div>
        <div class="col">
          <q-chip color="primary" class="q-ml-sm text-white glossy" square
            >Time</q-chip
          >
        </div>
        <div class="col-3">
          <q-chip color="primary" class="q-ml-lg text-white glossy" square
            >Approvers</q-chip
          >
        </div>
      </div>
    </div>
    <q-list bordered separator class="q-mt-md">
      <q-item v-for="(task, key) in tasks" :key="task.id">
        <q-item-section>{{ task.name }}</q-item-section>
        <q-item-section>{{ task.app }}</q-item-section>
        <q-item-section>{{ task.type }}</q-item-section>
        <q-item-section>{{ task.desc }}</q-item-section>
        <q-item-section>{{ task.contacts }}</q-item-section>
        <q-item-section>{{ task.date }}</q-item-section>
        <q-item-section>{{ task.time }}</q-item-section>
        <q-item-section>
          <div v-for="approver in task.approvers">
            {{ approver.name }}
          </div>
        </q-item-section>
        <q-item-section><q-btn color="primary" label="View"/></q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    tasks() {
      return this.$store.getters["tasks/approvals"];
    }
  }
};
</script>
