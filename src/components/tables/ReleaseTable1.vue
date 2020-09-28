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
          <span class="text-subtitle1">Release Detail</span>
        </q-toolbar>
      </template>
    </q-table>
  </div>
</template>
<script>
export default {
  name: "ReleaseTable1",
  data() {
    return {
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "Release Name",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "type",
          align: "left",
          label: "Release Type",
          field: "type"
        },
        {
          name: "desc",
          align: "left",
          label: "Summary",
          field: "desc"
        },
        {
          name: "contacts",
          align: "left",
          label: "PO / SRE",
          field: "contacts"
        }
      ],
      data: [
        {
          id: 1,
          name: "Cl_Mig_V2.0",
          type: "Application - Code Change",
          desc: "New cloud services",
          contacts: "Vinay Kumar, Arun Prakash"
        },
        {
          id: 2,
          name: "Password Rotation",
          type: "Infrastructure",
          desc: "Routine Task",
          contacts: "Arun Prakash"
        }
      ]
    };
  }
};
</script>
