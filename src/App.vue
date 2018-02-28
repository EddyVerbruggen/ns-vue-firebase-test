<template>
    <Page>
        <ActionBar title="NativeScript-Vue 🎉" />

        <StackLayout>
            <Label :text="msg" />
            <Counter />
        </StackLayout>
    </Page>
</template>

<script>
  import Counter from './components/Counter';

  export default {
    data() {
      return {
        msg: 'Welcome to NativeScript-Vue.',
      }
    },
    components: {
      Counter
    }
  }
</script>

<style>
    Label {
        font-size: 24px;
        text-align: center;
    }
</style>
