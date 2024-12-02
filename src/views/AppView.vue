<template>

    <v-layout class="rounded rounded-md">
        <v-app-bar color="blue-grey-darken-4" title="Eduly AI">
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

        </v-main>
    </v-layout>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
    router.push({ name: 'welcome' })

}

</script>