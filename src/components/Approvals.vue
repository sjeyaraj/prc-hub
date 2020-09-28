<template>
  <div class="q-pt-md">
    <q-bar class="bg-secondary">
      <div class="text-white">
        Approvals
      </div>
    </q-bar>
    <q-list bordered separator>
      <q-item v-for="task in tasks" :key="task.id">
        <q-item-section>
          <q-input outlined v-model="task.comment" label="Approver Name" />
        </q-item-section>
        <q-item-section>
          <q-item-section>
            <q-input outlined v-model="task.comment" label="Role" />
          </q-item-section>
        </q-item-section>
        <q-item-section>
          <template>
            <div class="q-pr-lg q-mt-lg " style="max-width: 300px">
              <q-input
                filled
                v-model="task.date"
                mask="YYYY-MM-DD"
                :rules="['date']"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="task.date">
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
          </template>
        </q-item-section>
        <q-item-section>
          <q-select
            filled
            v-model="task.status"
            :options="approvals"
            label="Approvals"
            style="max-width: 300px"
            class="q-mt-md q-pr-md"
            :rules="[val => (val && val.length > 0) || 'Select Approval Type']"
          />
        </q-item-section>
        <q-item-section>
          <q-input outlined v-model="task.comment" label="Comments" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
export default {
  name: "Approvals",

  data() {
    return {
      approvals: ["APPROVED", "NOT APPROVED", "CONDITIONALLY APPROVED", "NA"],
      tasks: [
        {
          id: 1,
          approver: "",
          role: "",
          date: "",
          Comment: "",
          status: ""
        },
        {
          id: 2,
          approver: "",
          role: "",
          date: "",
          Comment: "",
          status: ""
        }
      ]
    };
  }
};
</script>
