<template>
  <div>
    <q-table
      dense
      :data="data"
      :columns="columns"
      row-key="name"
      virtual-scroll
      style="height: 175px"
    >
      <template v-slot:top>
        <q-toolbar class="bg-primary text-white shadow-2">
          <span class="text-subtitle1">Jira Items Not Certified</span>
        </q-toolbar>
      </template>
    </q-table>
  </div>
</template>
<script>
export default {
  name: "JiraNotCertified",
  data() {
    return {
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "Jira ID",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "desc",
          align: "left",
          label: "Description",
          field: "desc"
        }
      ],
      data: [
        {
          id: 1,
          name: "SAM-3453",
          desc: "Update cloud compoenents"
        },
        {
          id: 2,
          name: "SAM-3455",
          desc: "Performance Testing for new api"
        },
        {
          id: 3,
          name: "SAM-3459",
          desc: "Refactor Test Automation"
        }
      ]
    };
  }
};
</script>
