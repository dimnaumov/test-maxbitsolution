<template>
  <div class="layout">
    <div class="container">
      <div class="content">
        <aside>
          <NavMenuContainer />
        </aside>
      
        <main>
          <slot />
        </main>
      </div>
    </div>

    <footer>
      <div class="container">
        <p>© 2025 Test Maxbitsolution</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .container {
    flex: 1 0 auto;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 16px;
  }

  footer {
    border-top: 1px solid black;
  }
}

aside, main {
  padding: 12px;
}
</style>
