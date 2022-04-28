<template>
  <div>
    <v-col
      cols="12"
      sm="6"
    >
      <v-text-field
        v-model="campoInput"
        label="Qual a sua tarefa?"
        outlined
        clearable
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>

    <v-list
      flat
      subheader
    >
      <v-subheader>General</v-subheader>

      <v-list-item-group
        multiple
        active-class=""
      >
      <div v-for="(tarefa, index) in tarefas"
      :key="index"
      >

        <Tarefa 
        :tarefa="tarefa"
        />

      </div>

      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>

import Tarefa from '../components/Tarefas/Tarefa.vue';

export default {
  name: 'home',
  components: {
    Tarefa 
  },
  data() {
    return {
      campoInput: null,
      tarefas: [
        {titulo: "Ir ao mercado", concluido: false},
        {titulo: "Comprar ração", concluido: false},
        {titulo: "Ir ao pet shop", concluido: false},
        {titulo: "Ir ao mecanico", concluido: false},
      ]
    }
  },
  methods: {
    handleAddTarefa() {
      if(this.campoInput){
        this.tarefas.push({titulo: this.campoInput, concluido: false})
        this.campoInput = null
      }
    }
  }
}
</script>
