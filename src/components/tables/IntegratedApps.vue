<template>
  <div>
    <q-table
      dense
      class="my-sticky-header-table"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
      virtual-scroll
      style="height: 150px"
    >
      <template v-slot:top>
        <q-toolbar class="bg-primary text-white shadow-2">
          <span class="text-subtitle1">Integration / Hand-shake Testing</span>
          <q-space />
          <q-tabs v-model="tab" shrink>
            <q-tab
              name="tab1"
              :disable="loading"
              label="App ++"
              @click="addRow"
            />
            <q-tab
              name="tab2"
              :disable="loading"
              label="App --"
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
          <q-td key="devTest" :props="props">
            {{ props.row.devTest }}
            <q-popup-edit
              v-model="props.row.devTest"
              title="Dev Test Status"
              buttons
            >
              <q-input
                type="string"
                v-model="props.row.devTest"
                dense
                autofocus
              />
            </q-popup-edit>
          </q-td>
          <q-td key="devVer" :props="props">
            {{ props.row.devVer }}
            <q-popup-edit
              v-model="props.row.devVer"
              title="Dev Test Version"
              buttons
            >
              <q-input
                type="string"
                v-model="props.row.devVer"
                dense
                autofocus
              />
            </q-popup-edit>
          </q-td>
          <q-td key="qaTest" :props="props">
            {{ props.row.qaTest }}
            <q-popup-edit
              v-model="props.row.qaTest"
              title="Update QA Test Status"
              buttons
            >
              <q-input
                type="string"
                v-model="props.row.qaTest"
                dense
                autofocus
              />
            </q-popup-edit>
          </q-td>
          <q-td key="qaVer" :props="props">
            {{ props.row.qaVer }}
            <q-popup-edit
              v-model="props.row.qaVer"
              title="QA Test Version"
              buttons
            >
              <q-input
                type="string"
                v-model="props.row.qaVer"
                dense
                autofocus
              />
            </q-popup-edit>
          </q-td>
          <q-td key="ctTest" :props="props">
            {{ props.row.ctTest }}
            <q-popup-edit
              v-model="props.row.ctTest"
              title="QA Test Version"
              buttons
            >
              <q-input
                type="string"
                v-model="props.row.ctTest"
                dense
                autofocus
              />
            </q-popup-edit>
          </q-td>
          <q-td key="ctVer" :props="props">
            {{ props.row.ctVer }}
            <q-popup-edit
              v-model="props.row.ctVer"
              title="QA Test Version"
              buttons
            >
              <q-input
                type="string"
                v-model="props.row.ctVer"
                dense
                autofocus
              />
            </q-popup-edit>
          </q-td>
          <q-td key="prTest" :props="props">
            {{ props.row.prTest }}
            <q-popup-edit
              v-model="props.row.prTest"
              title="Prod Test Status"
              buttons
            >
              <q-input
                type="string"
                v-model="props.row.prTest"
                dense
                autofocus
              />
            </q-popup-edit>
          </q-td>
          <q-td key="prVer" :props="props">
            {{ props.row.prVer }}
            <q-popup-edit
              v-model="props.row.prVer"
              title="Prod Test Version"
              buttons
            >
              <q-input
                type="string"
                v-model="props.row.prVer"
                dense
                autofocus
              />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
export default {
  name: "IntegratedApps",
  data() {
    return {
      loading: false,
      filter: "",
      rowCount: 10,
      tab: null,
      columns: [
        {
          name: "name",
          required: true,
          label: "App Name",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "devTest",
          align: "center",
          label: "Dev Val",
          field: "devTest"
        },
        { name: "devVer", label: "Dev V..", field: "devVer", align: "center" },
        {
          name: "qaTest",
          label: "QA Val",
          field: "qaTest",
          align: "center"
        },
        { name: "qaVer", label: "QA V..", field: "qaVer", align: "center" },
        {
          name: "ctTest",
          label: "CT Val",
          field: "ctTest",
          align: "center"
        },
        { name: "ctVer", label: "CT V..", field: "ctVer", align: "center" },
        {
          name: "prTest",
          label: "Pr Val",
          field: "prTest",
          align: "center"
        },
        { name: "prVer", label: "Pr V..", field: "prVer", align: "center" }
      ],
      data: [
        {
          id: 1,
          name: "Test App1",
          devTest: "Yes",
          devVer: "1.0",
          qaTest: "Yes",
          qaVer: "4.0",
          ctTest: "Yes",
          ctVer: "2.0",
          prTest: "Yes",
          prVer: "1.0"
        },
        {
          id: 2,
          name: "Test App2",
          devTest: "Yes",
          devVer: "2.0",
          qaTest: "Yes",
          qaVer: "2.0",
          ctTest: "NA",
          ctVer: "NA",
          prTest: "NA",
          prVer: "NA"
        }
      ],
      original: [
        {
          name: "New App",
          devTest: "NA",
          devVer: "NA",
          qaTest: "NA",
          qaVer: "NA",
          ctTest: "NA",
          ctVer: "NA",
          prTest: "NA",
          prVer: "NA"
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
