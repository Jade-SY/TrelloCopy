<template>
  <div>
    <v-card class="mx-auto" max-width="100%" outlined>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn icon>
          <v-icon>mdi-chat-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-attachment</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ListBoxItem',
};
</script>

<style lang="scss" scoped>
.headline {
  font-size: 16px;
}
</style>
