<template>

    <v-layout class="rounded rounded-md">
        <v-app-bar color="blue-grey-darken-4">

            <v-img class="mx-2" :src="imgSrc" max-height="40" max-width="40" contain></v-img>

            <v-toolbar-title class="ml-2">
                <div style="display:flex; align-items:center">
                    <div>Eduly AI </div>
                    <div class="text-subtitle-2 text-italic text-blue-grey-darken-1 ms-2">by ToKaDev</div>
                </div>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="logout">
                <v-icon>mdi-export</v-icon>
            </v-btn>

        </v-app-bar>

        <!-- <v-navigation-drawer permanent color="grey-darken-2">
            <v-list>
                <v-list-item title="Navigation drawer"></v-list-item>
            </v-list>
        </v-navigation-drawer> -->

        <v-main>
            <v-container fluid class="fill-heights">
                <v-row>
                    <v-col cols="6">
                        <DailyTasks />
                    </v-col>
                    <v-col cols="6">
                        <DailyTasks />
                    </v-col>
                </v-row>
            </v-container>

        </v-main>
    </v-layout>
</template>

<script lang="ts" setup>
import DailyTasks from '@/components/DailyTasks.vue';
import { useRouter } from 'vue-router';
import imgSrc from '@/assets/logo.png';

const router = useRouter();

const logout = () => {
    router.push({ name: 'welcome' })

}

</script>