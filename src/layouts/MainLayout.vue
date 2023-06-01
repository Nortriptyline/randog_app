<template>
    <div class="h-screen w-screen overflow-y-scroll">

        <header v-if="$slots.header" class="h-32 fixed top-0">
            <slot name="header" />
        </header>

        <div :class="{ 'pt-32': $slots.header }">
            <slot />
        </div>

        <div
            class="grid grid-cols-5 text-center fixed bottom-0 w-screen shadow-[0_0px_4px_0px_rgba(0,0,0,0.3)] border-gray-400 h-16">
            <!-- Rechercher une ballades et afficher une liste -->
            <BottomBarLink>Ballades</BottomBarLink>
            <!-- Proposition de membres Et voir les dernieres personnes avec qui on a participé -->
            <BottomBarLink>Communauté</BottomBarLink>
            <!-- Ballades sur lesquels l'utilisateur s'est inscrit -->
            <BottomBarLink>Enregistrés</BottomBarLink>
            <!-- Page de configuration des chiens de l'utilisateur -->
            <BottomBarLink>Mes chiens</BottomBarLink>
            <!-- Profile de l'utilisateur -->
            <BottomBarLink>Profil</BottomBarLink>
        </div>
    </div>
</template>
<script setup lang="ts">
import BottomBarLink from '@/components/BottomBarLink.vue';
</script>
