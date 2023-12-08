<script setup></script>
<template>
  <h4>BasicComponent</h4>
  <div>
    <h4>Button</h4>
    <v-btn>Button</v-btn>
    <v-btn color="primary">Button</v-btn>
    <v-btn color="secondary">Button</v-btn>
    <v-icon icon="mdi-check-circle"></v-icon>

    <h4>Cards</h4>
    <v-card
      loading
      width="400"
      title="Card title"
      subtitle="Subtitle"
      text="..."
    >
      <v-card-actions>
        <v-btn>Click me</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<style scoped></style>
