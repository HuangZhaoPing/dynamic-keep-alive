<template>
  <section class="app-layout">
    <app-header/>
    <section>
      <app-aside/>
      <section class="inner">
        <header>
          <tabs/>
        </header>
        <app-main/>
      </section>
    </section>
  </section>
</template>

<script>
import AppHeader from './AppHeader'
import AppAside from './AppAside'
import Tabs from './Tabs'
import AppMain from './AppMain'

export default {
  components: {
    AppHeader,
    AppAside,
    Tabs,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  section {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .inner {
    flex-direction: column;
  }
}
</style>
