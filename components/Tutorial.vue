<template>
  <v-data-table
    :headers="headers"
    :items="getCountryDataFiltered"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'NuxtTutorial',

  data() {
    return {
      headers: [
        {
          text: 'Country',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Region', value: 'region' },
        { text: 'Area', value: 'area' },
        { text: 'Independent', value: 'independent' },
      ],
    }
  },
  computed: {
    ...mapGetters(['getCountryDataFiltered', 'getCountryNames']),
  },
  created() {
    this.fetchCountryData()
  },
  methods: { ...mapActions(['fetchCountryData']) },
}
</script>
