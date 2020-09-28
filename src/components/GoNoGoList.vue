<template>
  <div class="q-pt-md">
    <q-bar class="bg-secondary">
      <div class="text-white">
        Go / No-Go Checklist
      </div>
    </q-bar>
    <q-list bordered separator>
      <q-item v-for="task in tasks" :key="task.id">
        <q-item-section>
          <q-item-label>{{ task.area }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.criteria }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-input outlined v-model="task.link" label="Links" />
        </q-item-section>
        <q-item-section>
          <q-input outlined v-model="task.comment" label="Comments" />
        </q-item-section>
        <q-item-section side top>
          <div>
            <div class="q-gutter-sm">
              <q-radio v-model="task.status" val="pass" label="Pass" />
              <q-radio v-model="task.status" val="fail" label="Fail" />
              <q-radio v-model="task.status" val="na" label="NA" />
              <q-radio
                v-model="task.status"
                val="progress"
                label="In-Progress"
              />
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
export default {
  name: "GoNoGoList",

  data() {
    return {
      tasks: [
        {
          id: 1,
          area: "CA Sign Off",
          criteria: "BU should execute test in UAT signed off",
          link: "",
          Comment: "",
          status: ""
        },
        {
          id: 2,
          area: "Security Scan",
          criteria: "Developer should complete security scan",
          link: "",
          Comment: "",
          status: ""
        }
      ]
    };
  }
};
</script>
