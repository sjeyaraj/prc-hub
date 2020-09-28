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
          <span class="text-subtitle1">List of Exceptions / Suppressions</span>
        </q-toolbar>
      </template>
    </q-table>
  </div>
</template>
<script>
export default {
  name: "Suppressions",
  data() {
    return {
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "Type",
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
          name: "comments",
          align: "left",
          label: "Comments",
          field: "comments"
        }
      ],
      data: [
        {
          id: 1,
          name: "Security",
          desc: "Password rotation scheduled on same day",
          comments: "SRE notified"
        }
      ]
    };
  }
};
</script>
