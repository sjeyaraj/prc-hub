<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <div class="text-h4 text-weight-bold q-mt-sm">PRC-Hub</div>
          <div class="text-overline">Product Release Ceritificate</div>
        </q-toolbar-title>
        <div class="q-mr-*">
          <q-toolbar-title>
            <q-icon class="q-pr-sm" name="account_circle" />
            <span class="text-subtitle2">Stephen Joseph</span>
            <q-icon class="q-pl-sm" name="exit_to_app" />
          </q-toolbar-title>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-toolbar class="text-primary">
          <q-btn flat round dense icon="widgets" />
          <q-toolbar-title>Navigation</q-toolbar-title>
        </q-toolbar>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <small>Copyright 2020 Equifax, Inc.</small>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Home",
    caption: "Release Home",
    icon: "home",
    link: ""
  },
  {
    title: "Approvals",
    caption: "Tickets needs your attention",
    icon: "check_box",
    link: "/#/approvals"
  },
  {
    title: "Search",
    caption: "Search by Application / Release Name",
    icon: "search",
    link: "/#/search"
  },
  {
    title: "Add Release",
    caption: "Create new Release",
    icon: "create",
    link: "/#/newRelease"
  },
  {
    title: "Release Calendar",
    caption: "Scheduled for the day",
    icon: "today",
    link: "/#/releaseCalendar"
  },
  {
    title: "Dashboard",
    caption: "Release Trend",
    icon: "bar_chart",
    link: "/#/dashboard"
  },

  {
    title: "ContactUs",
    caption: "To contribute, Add new features, Need help",
    icon: "contact_support",
    link: "/#/contactus"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: true,
      essentialLinks: linksData
    };
  }
};
</script>
