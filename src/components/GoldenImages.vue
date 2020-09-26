<template>
  <div>
    <q-table
      title="IAAS Golder Image Validation"
      dense
      :data="data"
      :columns="columns"
      row-key="name"
      hide-bottom
    >
      <template v-slot:top>
        <q-toolbar class="bg-primary text-white shadow-2">
          <span class="text-subtitle1">IAAS Golden Image Validation</span>
          <q-space />
          <q-tabs v-model="tab" shrink>
            <q-tab
              name="tab1"
              :disable="loading"
              label="Add Image"
              @click="addRow"
            />
            <q-tab
              name="tab2"
              :disable="loading"
              label="Remove Image"
              @click="removeRow"
            />
          </q-tabs>
        </q-toolbar>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name">
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="critical" :props="props">
            {{ props.row.critical }}
            <q-popup-edit
              v-model="props.row.critical"
              title="Critical Issue Count"
              buttons
            >
              <q-input
                type="string"
                v-model="props.row.critical"
                dense
                autofocus
              />
            </q-popup-edit>
          </q-td>
          <q-td key="high" :props="props">
            {{ props.row.high }}
            <q-popup-edit
              v-model="props.row.high"
              title="High Issue Count"
              buttons
            >
              <q-input type="string" v-model="props.row.high" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="medium" :props="props">
            {{ props.row.medium }}
            <q-popup-edit
              v-model="props.row.medium"
              title="Medium Issue Count"
              buttons
            >
              <q-input
                type="string"
                v-model="props.row.medium"
                dense
                autofocus
              />
            </q-popup-edit>
          </q-td>
          <q-td key="low" :props="props">
            {{ props.row.low }}
            <q-popup-edit
              v-model="props.row.low"
              title="Low Issue Count"
              buttons
            >
              <q-input type="string" v-model="props.row.low" dense autofocus />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
export default {
  name: "GoldenImages",
  data() {
    return {
      loading: false,
      filter: "",
      rowCount: 10,
      columns: [
        {
          name: "name",
          required: true,
          label: "ID of Container Golden Image Used - Link",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "critical",
          align: "center",
          label: "# Critical",
          field: "critical"
        },
        { name: "high", label: "# High", field: "high", align: "center" },
        {
          name: "medium",
          label: "# Medium",
          field: "medium",
          align: "center"
        },
        { name: "low", label: "# Low", field: "low", align: "center" }
      ],
      data: [
        {
          id: 1,
          name: "Cloud Mig - V 1.01",
          critical: 1,
          high: 0,
          medium: 0,
          low: 1
        }
      ],
      original: [
        {
          name: "Cloud Mig - V 1.01",
          critical: 1,
          high: 0,
          medium: 0,
          low: 1
        },
        {
          name: "New Image",
          critical: 0,
          high: 0,
          medium: 0,
          low: 1
        }
      ]
    };
  },
  methods: {
    addRow() {
      this.loading = true;
      console.log(this.data.length);
      setTimeout(() => {
        const index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)];
        if (this.data.length === 0) {
          this.rowCount = 0;
        }
        row.id = ++this.rowCount;
        const addRow = { ...row }; // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [
          ...this.data.slice(0, index),
          addRow,
          ...this.data.slice(index)
        ];
        this.loading = false;
      }, 500);
    },

    removeRow() {
      this.loading = true;
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length);
        this.data = [
          ...this.data.slice(0, index),
          ...this.data.slice(index + 1)
        ];
        this.loading = false;
      }, 500);
    }
  }
};
</script>
