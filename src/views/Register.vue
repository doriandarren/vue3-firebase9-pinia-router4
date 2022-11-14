<script setup>
    import { ref } from 'vue';
    import {useUserStore} from '../stores/user';


    const userStore = useUserStore();


    const email = ref('doriandarren1@gmail.com');
    const password = ref('123123');

    const handleSubmit = async() => {

        if(!email.value || password.value.length < 6){
            return alert('llena los campos');
        }

        await userStore.registerUser(email.value, password.value);

    }



</script>


<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese email" v-model.trim="email">
            <input type="password" placeholder="Ingrese contraseña"  v-model.trim="password">
            <button type="submit" :disabled="userStore.loadingUser">Crear Usuario</button>
        </form>
    </div>
</template>
