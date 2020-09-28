<template>
  <div class="q-pa-md q-ml-md q-mt-md items-start q-gutter-md">
    <div class="row justify-evenly">
      <q-card
        class="col-12 my-card text-white"
        style="background: radial-gradient(circle, #240606 0%, #703e3e 100%)"
      >
        <q-card-section>
          <div class="text-h4" style="">Product Release Hub</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ home }}
        </q-card-section>
      </q-card>

      <q-card dark bordered class="col bg-grey-9 my-card">
        <q-card-section>
          <div class="row">
            <div class="col-8 text-h4">Approvals</div>
            <q-icon class="col" name="thumb_up" style="font-size: 32px" />
          </div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          {{ approvals }}
        </q-card-section>
      </q-card>
    </div>

    <div class="row justify-evenly">
      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section>
          <div class="row">
            <div class="col-8 text-h4">Search Releases</div>
            <q-icon class="col" name="thumb_up" style="font-size: 32px" />
          </div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          {{ approvals }}
        </q-card-section>
      </q-card>
      <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #240606 0%, #703e3e 100%)"
      >
        <q-card-section>
          <div class="text-h4" style="">Release Calendar</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ home }}
        </q-card-section>
      </q-card>
    </div>
    <div class="row justify-evenly">
      <q-card
        class="col-12 my-card text-white"
        style="background: radial-gradient(circle, #240606 0%, #703e3e 100%)"
      >
        <q-card-section>
          <div class="text-h4" style="">Dashboard</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ home }}
        </q-card-section>
      </q-card>

      <q-card dark bordered class="col bg-grey-9 my-card">
        <q-card-section>
          <div class="row">
            <div class="col-8 text-h4">Contact Us</div>
            <q-icon class="col" name="thumb_up" style="font-size: 32px" />
          </div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          {{ approvals }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      home:
        "PRC-Hub provides all tools that you need to plan your Production Release. You can initiate Production Release Certificate and add all the upstream, downstream systems detail and get all test execution / defect detail directly from Jira automatically",
      approvals:
        "All the Production Release Certificates that needs your approval listed in Approvals Section. The approver can view, edit applicable fields of the Release Certificate"
    };
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
.big-card
  width: 100%
  max-width: 1020px
</style>
