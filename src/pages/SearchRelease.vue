<template>
  <q-page class="q-pa-md">
    <q-toolbar class="bg-secondary text-white">
      <q-toolbar-title>Search Releases</q-toolbar-title>
    </q-toolbar>
    <q-input
      class="q-mt-md"
      v-model="searchField"
      label="Search by Release / Application / Contact "
    >
      <template v-slot:append>
        <q-icon
          v-if="searchField !== ''"
          name="close"
          @click="searchField = ''"
          class="cursor-pointer"
        />
        <q-icon name="search" />
      </template>
    </q-input>

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
            class="text-white glossy"
            square
            >Contacts</q-chip
          >
        </div>
        <div class="col">
          <q-chip
            color="primary"
            class="text-white glossy"
            square
            >Date</q-chip
          >
        </div>
        <div class="col-3">
          <q-chip color="primary" class="text-white glossy" square
            >Time</q-chip
          >
        </div>
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
        <q-item-section><q-btn color="primary" label="View"/></q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("tasks", ["tasks"]),
    ...mapState("tasks", ["search"]),
    searchField: {
      get() {
        return this.search;
      },
      set(value) {
        this.setSearch(value);
      }
    }
  },
  methods: {
    ...mapActions("tasks", ["setSearch"])
  }
};
</script>
