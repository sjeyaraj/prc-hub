<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-secondary text-white">
      <q-toolbar-title>Create New Release</q-toolbar-title>
    </q-toolbar>
    <q-form @submit="onSubmit" @reset="onReset" class="q-mt-md q-gutter-sm">
      <div class="row justify-between">
        <div class="col-3">
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
          <div class="row">
            <div class="col-7">
              <q-input
                filled
                label="Release Date"
                v-model="date"
                mask="date"
                :rules="['date']"
                style="max-width: 250px"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="date">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-5 q-pl-md">
              <q-input
                filled
                label="Time"
                v-model="time"
                style="max-width: 100px"
              >
                <template v-slot:append>
                  <q-icon name="alarm" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-time v-model="time" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
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
              v-if="
                jprojname === 'Cloud Migration' && jrelname === 'Cl_Mig_V2.0'
              "
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
            label="Software Package / Software Version"
          />
        </div>
        <div class="col-md-5">
          <IntegratedApps
            v-if="
              reltype === 'Application - Code Change' && app === 'Test App1'
            "
          />
          <GoldenImages
            v-if="
              reltype === 'Application - Code Change' && app === 'Test App1'
            "
            class="q-pt-md"
          />
          <JiraNotCertified
            v-if="jprojname === 'Cloud Migration' && jrelname === 'Cl_Mig_V2.0'"
            class="q-pt-md"
          />
        </div>
      </div>
      <TestResultSummary
        v-if="jprojname === 'Cloud Migration' && jrelname === 'Cl_Mig_V2.0'"
      />
      <LatentDefects
        v-if="jprojname === 'Cloud Migration' && jrelname === 'Cl_Mig_V2.0'"
      />
      <Suppressions />

      <GoNoGoList />
      <Approvals class="q-mb-sm" />
      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </q-form>
  </div>
</template>

<script>
import IntegratedApps from "components/tables/IntegratedApps.vue";
import GoldenImages from "components/tables/GoldenImages.vue";
import JiraNotCertified from "components/tables/JiraNotCertified.vue";
import TestResultSummary from "components/tables/TestResultSummary.vue";
import LatentDefects from "components/tables/LatentDefects.vue";
import Suppressions from "components/tables/Suppressions.vue";
import GoNoGoList from "components/GoNoGoList.vue";
import Approvals from "components/Approvals.vue";
export default {
  components: {
    IntegratedApps,
    GoldenImages,
    JiraNotCertified,
    TestResultSummary,
    LatentDefects,
    Suppressions,
    GoNoGoList,
    Approvals
  },
  data() {
    return {
      date: "",
      time: "",
      reltype: null,
      jprojname: null,
      jrelname: null,
      app: null,
      classification: null,
      relname: null,
      relid: null,
      secad: null,
      asset: null,
      spackage: null,
      sversion: null,
      snowid: null,
      link: null,
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
      secads: ["Sec Adv1", "Sec Adv2", "Sec Adv3", "Sec Adv4"]
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
      this.jiraid = null;
      this.snowid = null;
      this.asset = null;
      this.spackage = null;
      this.sversion = null;
    }
  }
};
</script>
