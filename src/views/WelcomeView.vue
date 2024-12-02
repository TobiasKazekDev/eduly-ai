<template>
  <v-main>
    <v-container class="fill-heights">
      <v-responsive class="align-centerfill-height mx-auto test2" max-width="900">
        <div class="py-4" />

        <v-img class="mb-4" height="150" src="@/assets/logo.png" />

        <div class="text-center">
          <h1 class="text-h2 text-blue-grey-darken-4">Eduly AI</h1>
          <div class="text-h6 font-weight-light">by ToKaDev</div>
        </div>

        <div class="py-8" />

        <v-row align="center" justify="center">
          <v-col style="max-width: 600px;">
            <v-card class="py-4" color="grey-darken-1" rounded="lg" variant="outlined">

              <template #title>
                <div class="text-body-1 mb-4">Starte Deine persönliche Lernerfahrung!</div>
              </template>

              <template #subtitle>
                <div class="text-subtitle-1">
                  <v-form>
                    <v-text-field variant="solo" label="Email" required></v-text-field>
                    <v-text-field variant="solo" label="Password" type="password" required></v-text-field>
                    <v-btn variant="elevated" @click="login" prepend-icon="mdi-login"
                      color="grey-darken-4">Login</v-btn>
                    <v-btn variant="elevated" prepend-icon="mdi-account-check" class="ms-2"
                      color="blue-grey-darken-4">Account erstellen</v-btn>
                  </v-form>
                </div>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';



const router = useRouter();

const login = () => {

  router.push({ name: 'app' })

}



</script>

<style></style>
