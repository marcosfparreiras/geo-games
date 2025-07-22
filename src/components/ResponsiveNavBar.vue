<template>
  <ResponsiveNavBarTemplate :navBarElements="navBarElements">
    <template v-slot:languageSetComponent>
      <LanguageSelect />
    </template>
  </ResponsiveNavBarTemplate>
</template>

<script setup>
import ResponsiveNavBarTemplate from './ResponsiveNavBarTemplate.vue';
import LanguageSelect from './LanguageSelect.vue';

// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()

// Documentation for the RouterLninkProps:
// - https://router.vuejs.org/api/interfaces/RouterLinkProps.html
// - https://router.vuejs.org/api/interfaces/RouteLocationAsRelativeGeneric.html
// - https://router.vuejs.org/api/interfaces/RouteLocationAsPathGeneric.html

class NavBarElement {
}

class NavBarLink extends NavBarElement {
  constructor(text, routerLinkParams) {
    super()
    this.text = text
    this.routerLinkParams = routerLinkParams
  }
}

// Use it to group items in the menu
class NavBarGroup extends NavBarElement {
  constructor(text, navBarLinks) {
    super()
    this.text = text
    this.navBarLinks = navBarLinks
  }
}

const navBarElements = []

const homePageLink = new NavBarLink('Home', { name: 'HomePage' })
navBarElements.push(homePageLink)

const matchTheFlagLink = new NavBarLink('Match The Flag', { name: 'MatchTheFlagOverview' })
navBarElements.push(matchTheFlagLink)

const matchTheFlagBalkansLnk = new NavBarLink('Match The Flag Balkans', { name: 'MatchTheFlag', params: { subGameSlug: 'balkans' } })
navBarElements.push(matchTheFlagBalkansLnk)


</script>

<style scoped></style>
