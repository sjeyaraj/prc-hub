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
        <q-toolbar class="bg-secondary text-white shadow-2">
          <span class="text-subtitle1"
            >Newly Discovered Latent Defects (External Apps)</span
          >
        </q-toolbar>
      </template>
    </q-table>
  </div>
</template>
<script>
export default {
  name: "LatentDefects",
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
          label: "Summary",
          field: "desc"
        },
        {
          name: "defType",
          align: "left",
          label: "Defect Type",
          field: "defType"
        },
        {
          name: "sev",
          align: "left",
          label: "Severity",
          field: "sev"
        },
        {
          name: "testType",
          align: "left",
          label: "Test Type",
          field: "testType"
        }
      ],
      data: [
        {
          id: 1,
          name: "SAM-3462",
          desc: "PDF issues",
          defType: "Requirement",
          sev: "Sev-3",
          testType: "Exploratory"
        },
        {
          id: 2,
          name: "SAM-3478",
          desc: "Certificate issues",
          defType: "Latent",
          sev: "Sev-4",
          testType: "Security"
        }
      ]
    };
  }
};
</script>
