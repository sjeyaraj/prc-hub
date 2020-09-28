<template>
  <div>
    <q-table
      dense
      :data="data"
      :columns="columns"
      row-key="name"
      virtual-scroll
      style="height: 200px"
    >
      <template v-slot:top>
        <q-toolbar class="col-8 bg-secondary text-white shadow-2">
          <span class="text-subtitle1">Test Execution Summary</span>
        </q-toolbar>
        <q-toolbar class="col-4 bg-primary text-white shadow-2">
          <span class="text-subtitle1">#Open Defects</span>
        </q-toolbar>
      </template>
    </q-table>
  </div>
</template>
<script>
export default {
  name: "TestResultSummary",
  data() {
    return {
      columns: [
        {
          name: "name",
          required: true,
          label: "Environment",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "suite",
          align: "left",
          label: "Test Suite",
          field: "suite"
        },
        {
          name: "planned",
          align: "center",
          label: "Planned",
          field: "planned"
        },
        {
          name: "executed",
          align: "center",
          label: "Executed",
          field: "executed"
        },
        {
          name: "passed",
          align: "center",
          label: "Passed",
          field: "passed"
        },
        {
          name: "failed",
          align: "center",
          label: "Failed",
          field: "failed"
        },
        {
          name: "sev1",
          align: "center",
          label: "Sev-1",
          field: "sev1"
        },
        {
          name: "sev2",
          align: "center",
          label: "Sev-2",
          field: "sev2"
        },
        {
          name: "sev3",
          align: "center",
          label: "Sev-3",
          field: "sev3"
        },
        {
          name: "sev4",
          align: "center",
          label: "Sev-4",
          field: "sev4"
        }
      ],
      data: [
        {
          id: 1,
          name: "Dev",
          suite: "Functional",
          planned: 9,
          executed: 9,
          passed: 9,
          failed: 0,
          sev1: 0,
          sev2: 0,
          sev3: 1,
          sev4: 0
        },
        {
          id: 2,
          name: "Dev",
          suite: "Regression",
          planned: 49,
          executed: 49,
          passed: 49,
          failed: 0,
          sev1: 0,
          sev2: 0,
          sev3: 0,
          sev4: 0
        },
        {
          id: 3,
          name: "QA",
          suite: "Performance",
          planned: 1,
          executed: 1,
          passed: 1,
          failed: 0,
          sev1: 0,
          sev2: 0,
          sev3: 0,
          sev4: 0
        }
      ]
    };
  }
};
</script>
