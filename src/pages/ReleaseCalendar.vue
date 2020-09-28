<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-secondary text-white">
      <q-toolbar-title>Release Calendar</q-toolbar-title>
    </q-toolbar>
    <q-card class="q-mt-md">
      <q-splitter v-model="splitterModel" style="height: 415px">
        <template v-slot:before>
          <div class="q-ml-lg q-mt-md">
            <q-date v-model="date" :events="events" event-color="orange" />
          </div>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="date"
            animated
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="2020/10/01">
              <div class="text-h4 q-mb-md">2020/10/01</div>

              <ReleaseTable1 />
            </q-tab-panel>

            <q-tab-panel name="2020/10/10">
              <div class="text-h4 q-mb-md">2020/10/10</div>
              <ReleaseTable2 />
            </q-tab-panel>

            <q-tab-panel name="2019/02/06">
              <div class="text-h4 q-mb-md">2019/02/06</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </q-card>
  </div>
</template>

<script>
import ReleaseTable1 from "components/tables/ReleaseTable1.vue";
import ReleaseTable2 from "components/tables/ReleaseTable2.vue";
export default {
  components: {
    ReleaseTable1,
    ReleaseTable2
  },
  data() {
    return {
      splitterModel: 35,
      date: "2020/09/26",
      events: ["2020/10/01", "2020/10/10"]
    };
  }
};
</script>
