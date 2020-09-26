<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title>Create New Release</q-toolbar-title>
    </q-toolbar>
    <q-form @submit="onSubmit" @reset="onReset" class="q-mt-md q-gutter-sm">
      <div class="row justify-evenly">
        <div class="col-md-3">
          <div class="q-gutter-sm">
            <q-select
              filled
              v-model="reltype"
              :options="types"
              label="Release Type"
              style="max-width: 300px"
              :rules="[val => (val && val.length > 0) || 'Select Release Type']"
            />
            <q-select
              filled
              v-model="jprojname"
              :options="jprojects"
              label="Jira Project"
              style="max-width: 300px"
              :rules="[val => (val && val.length > 0) || 'Select Jira Project']"
            />
            <q-select
              filled
              v-model="jrelname"
              :options="jrelnames"
              label="Jira Release Version"
              :rules="[
                val => (val && val.length > 0) || 'Select Jira Release Version'
              ]"
              style="max-width: 300px"
            />
            <q-select
              filled
              v-model="app"
              :options="apps"
              label="Application"
              :rules="[
                val => (val && val.length > 0) || 'Select an Application'
              ]"
              style="max-width: 300px"
            />
            <q-select
              filled
              v-model="classification"
              :options="classifications"
              label="Data classification"
              :rules="[
                val => (val && val.length > 0) || 'Select a Data classification'
              ]"
              style="max-width: 300px"
            />
            <q-select
              filled
              v-model="secad"
              :options="secads"
              label="Security Advisement"
              :rules="[
                val => (val && val.length > 0) || 'Select a Security Advisement'
              ]"
              style="max-width: 300px"
            />
          </div>
        </div>
        <div class="col-md-3">
          <q-input
            filled
            v-model="relname"
            label="Release Name *"
            lazy-rules
            class
            :rules="[
              val => (val && val.length > 0) || 'Release name is mandatory'
            ]"
          />
          <q-input
            filled
            v-model="relid"
            label="Release ID / Version No *"
            lazy-rules
            :rules="[
              val =>
                (val && val.length > 0) ||
                'Release ID / Version No is mandatory'
            ]"
          />
          <q-item
            clickable
            v-ripple
            :active="link === 'inbox'"
            @click="link = 'inbox'"
            active-class="my-menu-link"
          >
            <q-item-section
              >Jira Link:
              https://jira.cloud/cli-release-all-issues</q-item-section
            >
          </q-item>

          <q-input
            filled
            v-model="snowid"
            label="SNOW Change Ticket *"
            lazy-rules
            :rules="[
              val =>
                (val && val.length > 0) || 'SNOW Change Ticket is mandatory'
            ]"
          />
          <q-input filled v-model="asset" label="Asset Name" />
          <q-input
            class="q-mt-md"
            filled
            v-model="spackage"
            label="Software Package"
          />
          <q-input
            class="q-mt-md"
            filled
            v-model="sversion"
            label="Software Version"
          />
        </div>
        <div class="col-md-3">
          <q-table
            title="Treats"
            :data="data"
            :columns="columns"
            row-key="name"
            binary-state-sort
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="desc" :props="props">
                  {{ props.row.name }}
                  <q-popup-edit v-model="props.row.name">
                    <q-input v-model="props.row.name" dense autofocus counter />
                  </q-popup-edit>
                </q-td>
                <q-td key="calories" :props="props">
                  {{ props.row.calories }}
                  <q-popup-edit
                    v-model="props.row.calories"
                    title="Update calories"
                    buttons
                  >
                    <q-input
                      type="number"
                      v-model="props.row.calories"
                      dense
                      autofocus
                    />
                  </q-popup-edit>
                </q-td>
                <q-td key="fat" :props="props">
                  <div class="text-pre-wrap">{{ props.row.fat }}</div>
                  <q-popup-edit v-model="props.row.fat">
                    <q-input
                      type="textarea"
                      v-model="props.row.fat"
                      dense
                      autofocus
                    />
                  </q-popup-edit>
                </q-td>
                <q-td key="carbs" :props="props">
                  {{ props.row.carbs }}
                  <q-popup-edit
                    v-model="props.row.carbs"
                    title="Update carbs"
                    buttons
                    persistent
                  >
                    <q-input
                      type="number"
                      v-model="props.row.carbs"
                      dense
                      autofocus
                      hint="Use buttons to close"
                    />
                  </q-popup-edit>
                </q-td>
                <q-td key="protein" :props="props">{{
                  props.row.protein
                }}</q-td>
                <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
                <q-td key="calcium" :props="props">{{
                  props.row.calcium
                }}</q-td>
                <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
      </div>
      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </q-form>
  </div>
</template>

<script>
import InputComponent from "components/InputComponent";
const inputCompValues = [
  {
    model: "relname",
    label: "Release Name"
  },
  {
    model: "relId",
    label: "Release Id / Version No"
  }
];
export default {
computed:{

}
  data() {
    return {
      reltype: null,
      jprojname: null,
      jrelname: null,
      app: null,
      classification: null,
      relname: null,
      relid: null,
      secad: null,
      accept: false,
      asset: null,
      spackage: null,
      sversion: null,
      apps: ["Test App1", "Test App2", "Test App3"],
      types: [
        "Application - Code Change",
        "Infrastructure",
        "Security",
        "Database",
        "Network"
      ],
      jprojects: ["Cloud Migration", "Data Engineering", "App Services"],
      jrelnames: ["Cl_Mig_V1.0", "Cl_Mig_V2.0"],
      classifications: ["Class1", "Class2", "Class3", "Class4", "Class5"],
      secads: ["Sec Adv1", "Sec Adv2", "Sec Adv3", "Sec Adv4"],
      columns: [
        {
          name: "desc",
          required: true,
          label: "Dessert (100g serving)",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "calories",
          align: "center",
          label: "Calories",
          field: "calories",
          sortable: true
        },
        {
          name: "fat",
          label: "Fat (g)",
          field: "fat",
          sortable: true,
          style: "width: 10px"
        },
        { name: "carbs", label: "Carbs (g)", field: "carbs" },
        { name: "protein", label: "Protein (g)", field: "protein" },
        { name: "sodium", label: "Sodium (mg)", field: "sodium" },
        {
          name: "calcium",
          label: "Calcium (%)",
          field: "calcium",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "iron",
          label: "Iron (%)",
          field: "iron",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }
      ],
      data: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%"
        }
      ]
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },

    onReset() {
      this.reltype = null;
      this.jprojname = null;
      this.jrelname = null;
      this.app = null;
      this.classification = null;
      this.secad = null;
      this.relname = null;
      this.relid = null;
      this.accept = false;
      this.jiraid = null;
      this.asset = null;
      this.spackage = null;
      this.sversion = null;
    }
  }
};
</script>
